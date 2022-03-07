import { Injectable } from "@nestjs/common";
import { User } from "src/domain/user.entity";
import { UserRepository } from "src/domain/user.repository";
import { PrismaService } from "../shared/prisma.service";

@Injectable()
export class UserPrismaRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async save(user: User) {
    await this.prisma.user.upsert({
      where: { id: user.id },
      create: user,
      update: user,
    })
  }

  async findById(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    })

    return user ? User.reconstruct(user) : null

  }
}