import { NextResponse } from "next/server"


export class ApiResponse {
    constructor(statusCode = 200, data = null, message = "") {
        this.success = statusCode < 400
        this.statusCode = statusCode
        this.data = data
        this.message = message
    }
}

