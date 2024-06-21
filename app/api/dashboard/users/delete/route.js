
import { dbConnect } from "@/lib/dbConnect";
import { User } from "@/models/user-model";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  try {
    await dbConnect()

    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      console.error("No user ID provided");
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      console.error(`User not found with ID: ${id}`);
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    console.log(`User deleted successfully: ${deletedUser}`);
    return NextResponse.json({
      message: "User deleted successfully",
      success: true
    });

  } catch (err) {
    console.error("Error deleting user:", err);
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}
