import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { dbConnect } from "@/lib/dbConnect";
import { User } from "@/models/user-model";

export const POST = async (request) => {
    const { username, email, password } = await request.json();

    // console.log(username, email, password);

    // Create a DB Connection
    await dbConnect();

    // Encrypt the password
    const hashedPassword = await bcrypt.hash(password, 5);

    // Form a DB payload
    const newUser = {
        username,
        password: hashedPassword,
        email
    };

    // Update the DB
    try {
        await User.create(newUser);
        return new NextResponse("User has been created", {
            status: 201,
        });
    } catch (error) {
        console.error("Error creating user:", error);
        return new NextResponse(error.message, {
            status: 500,
        });
    }
};
