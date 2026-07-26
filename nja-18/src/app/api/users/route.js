import { connectDB } from "@/lib/db"
import { UserModel } from "@/models/user.model"
import { NextResponse } from "next/server"



export async function GET() {
    try {
        await connectDB()
        const users = await UserModel.find()
        return NextResponse.json({
            success: true,
            data: users
        })
    } catch (error) {
        console.error(error)
    }
}

export async function POST(request) {
    try {
        await connectDB()
        const body = await request.json()
        const { username, name, password } = body
        const user = await UserModel.create({
            username, name, password
        })
        // await user.save()
        return NextResponse.json({
            success: true,
            data: { username, name }
        })
    } catch (error) {
        console.error(error)
    }
}

