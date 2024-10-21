
import userRepository from "../repositories/users.repositories.js";

async function createUserService(newUser){
    const user = await userRepository.createUserRepository(newUser)
    return user;

}

export default {
    createUserService
}