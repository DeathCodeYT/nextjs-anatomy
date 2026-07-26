import { ApiError } from "@/helper/apiError"
import { ApiResponse } from "@/helper/apiResponse"
import { asyncHandler } from "@/helper/asyncWrapper"
import { createUser } from "@/services/user.service"


export const GET = asyncHandler(async (request) => {

  const body = await request.json()

  if (!body.username) {
    throw new ApiError(404, "Username is not valid")
  }
  const result = await createUser(body)

  return NextResponse.json(new ApiResponse(200, result, "user created"))

})



// Request
// Validation
// Service
// Repository
// Database

