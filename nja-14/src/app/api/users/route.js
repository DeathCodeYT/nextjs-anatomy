// /api/users

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
export async function GET() {
    return NextResponse.json({
        success: true,
        data:users,
        message: "Users API working"
    })
}
export async function POST() {
    return NextResponse.json({
        success: true,
        message: "Users Created"
    })
}
export async function PUT() {
    return NextResponse.json({
        success: true,
        message: "Users Updated"
    })
}
export async function PATCH() {
    return NextResponse.json({
        success: true,
        message: "Users Partially Updated"
    })
}
// export async function DELETE() {
//     return NextResponse.json({
//         success: true,
//         message: "Users Deleted"
//     })
// }
export async function HEAD() {
    return new NextResponse(null,{
        status:201
    })
}
export async function OPTION() {
    return new NextResponse(null,{
        headers:{
            allow: "GET, POST, PUT, DELETE"
        }
    })
}


