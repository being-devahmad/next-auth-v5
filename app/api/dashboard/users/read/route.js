import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";
import { User } from "@/models/user-model";

export async function GET(req) {
    try {
        await dbConnect()
        const users = await User.find({})
        // console.log(users)

        return NextResponse.json({
            message: "Users fetched",
            success: true,
            users
        })
    } catch
    (err) {
        return NextResponse.json(
            { error: err.message },
            { status: 500 }
        )
    }
}