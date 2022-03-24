import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";


interface IAuthenticateRequest {
  email: string;
  password: string;
}


class AuthenticateUserService {
  async execute({email, password}: IAuthenticateRequest){

    const userRepositories = getCustomRepository(UsersRepositories);

    //Verificar se email existe
    const user = await userRepositories.findOne({
      email
    });

    if(!user) {
      throw new Error("Email/Password incorrect")
    };

    //Verificar se senha está correta
    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch) {
      throw new Error("Email/Password incorrect")
    };

    // Gerar o token
    const token = sign(
      {
        email: user.email
      }, "f123e125e1d0cdc630aa704ed0d6b794", {
        subject: user.id,
        expiresIn: "1d"
      }
    );

    return token;
  }
}

export { AuthenticateUserService }