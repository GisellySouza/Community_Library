
import userRepository from "../repositories/user.repositories.js";
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
    return user;

}

export default {
    createUserService
}