import { findUserByEmail } from "@/repositories/user.repository"


export async function createUser(data) {
    // business
    const user = findUserByEmail("email")
    return { success: true }
}

