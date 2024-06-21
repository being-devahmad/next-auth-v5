'use client'

import React, { useEffect, useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button } from "@nextui-org/react";
import axios from "axios";

const columns = [
  { key: "username", label: "USERNAME" },
  { key: "email", label: "EMAIL" },
  { key: "actions", label: "ACTIONS" }
];

export default function DashboardPage() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await axios.get('/api/dashboard/users/read');
      setUsers(res.data.users);
      console.log(res.data.users);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  }


  const handleAction = (id) => {
    console.log("Button clicked for user:", id);
  };

  const handleDelete = async (id) => {
    try {
      console.log(`Attempting to delete user with ID: ${id}`);
      const res = await axios.delete(`/api/dashboard/users/delete?id=${id}`); // Send ID as query parameter
      setUsers(users.filter((user) => user._id !== id));
      console.log("User deleted successfully:", res.data);
    } catch (error) {
      console.error("Error deleting user:", error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);


  return (
    <div className='min-h-screen flex justify-center items-center'>
      <Table aria-label="Example table with dynamic content" className="w-[800px] ">
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody items={users}>
          {(item) => (
            <TableRow key={item._id}>
              {(columnKey) => (
                <TableCell>
                  {columnKey === 'actions' ? (
                    <>
                      <Button onClick={() => handleAction(item._id)}>Edit</Button>
                      <Button onClick={() => handleDelete(item._id)}>Delete</Button>
                    </>
                  ) : (
                    item[columnKey]
                  )}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
