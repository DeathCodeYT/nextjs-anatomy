import { NextResponse } from "next/server"
import { ApiError } from "./apiError"
import { ApiResponse } from "./apiResponse"

export function asyncHandler(fn) {
    return async (...args) => {
        try {
            return await fn(...args)
        } catch (error) {
            return NextResponse.json(new ApiResponse(error.statusCode || 500, null, error.message || "Internal Server Error"), { status: error.statusCode || 500 })
        }
    }
}