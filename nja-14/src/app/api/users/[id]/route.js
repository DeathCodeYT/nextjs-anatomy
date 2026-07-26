// /api/users/123

import { NextResponse } from "next/server"
const users = [
    {
        "id": 1,
        "name": "Rahul Verma"
    },
    {
        "id": 2,
        "name": "Priya Sharma"
    },
    {
        "id": 3,
        "name": "Aman Gupta"
    },
    {
        "id": 4,
        "name": "Neha Singh"
    },
    {
        "id": 5,
        "name": "Vikram Desai"
    }
]
export async function GET(request,{params}) {
    const {id} = await params
    const searchParams = request.nextUrl.searchParams
    console.log("page",searchParams.get('page'))
    return NextResponse.json({
        success: true,
        data:users[id-1],
        message: "Users API working"
    })
}
