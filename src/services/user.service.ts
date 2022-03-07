import { Injectable } from "@nestjs/common";
import { User } from "src/domain/user.entity";
import { UserRepository } from "src/domain/user.repository";
import { PrismaService } from "src/infra/shared/prisma.service";

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository){}
  private users: User[] = [];
}