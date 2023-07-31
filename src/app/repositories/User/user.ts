import { User } from '@domain/User/User';
import { EditUserDTO } from '@infra/http/dtos/User/editUser.dto';
import { FindedUserDTO } from '@infra/http/dtos/User/findedUser.dto';
import { UserLoginDTO } from '@infra/http/dtos/User/login.dto';
import { NotFoundException } from '@nestjs/common';

export abstract class UserRepository {
  abstract register(user: User): Promise<string>;

  abstract login(account: UserLoginDTO): Promise<any | Error>;

  abstract edit(userId: string, account: EditUserDTO, photoFile?: Express.Multer.File): Promise<void | Error>;

  abstract findUserById(userId: string): Promise<User>;

  abstract updatePassword(userId: string, newPassword: string): Promise<User |boolean | Error>;

  abstract findByEmail(
    email: string,
  ): Promise<FindedUserDTO | NotFoundException>;
  abstract deleteUser(userId: string): Promise<void>
}
