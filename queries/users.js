import { User } from "@/models/user-model";



export async function createUser(user) {
    try {
        await User.create(user);
    } catch (e) {
        throw new Error(e)
    }
}