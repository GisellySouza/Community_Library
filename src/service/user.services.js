
import userRepository from "../repositories/user.repositories.js";
import {generateJWT} from "../service/auth.service.js";
import bcrypt from 'bcrypt';

async function createUserService(newUser){
    //verificação se o usuário existe a partir do Email
    const foundUser = await userRepository.findUserByEmailRepository(newUser.email)
    if(foundUser) throw new Error("User aldready exist!")

    //encriptografando a password, e alterando o password pra passhash
    const passHash = await bcrypt.hash(newUser.password, 10)
    const user = await userRepository.createUserRepository({
        ...newUser,
         password: passHash,
    });
    if (!user) throw new Error("Error creating User");
    const token = generateJWT(user.id);
    return token;

}

async function findAllUsersService() {
    const users = await userRepository.findAllUsersRepository();
    return users;
    
}

async function findUserByIdService(id) {
    const user = await userRepository.findUserByIdRepository(id);
    if (!user) throw new Error('User not Found.');
    return user;
    
}

async function updateUserService(newUser, userId) {
    const user = await userRepository.findUserByIdRepository(userId);
    if (!user) throw new Error('User not Found.');
    if (newUser.password) {
        newUser.password = await bcrypt.hash(newUser.password, 10)
    }
    const userUpdated = userRepository.updateUserRepository(userId, newUser)
    return userUpdated
    
}
async function deleteUserService( userId ) {
    const user = await userRepository.findUserByIdRepository(userId);
    if (!user) throw new Error('User not Found.');

    const { message } = await userRepository.deleteUserRepository(userId);
    return message;
    
}



export default {
    createUserService,
    findAllUsersService,
    findUserByIdService,
    updateUserService,
    deleteUserService
}