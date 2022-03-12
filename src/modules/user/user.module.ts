import { Module } from '@nestjs/common';
import { UserPrismaRepository } from 'src/infra/repositories/user.prisma.repository';
import { UserController } from '../user/user.controller';
import { PrismaService } from '../../infra/shared/prisma.service';

@Module({
  providers: [
    PrismaService,
    {
      provide: 'UserRepository',
      useClass: UserPrismaRepository,
    },
  ],
  controllers: [
    UserController,
  ]
})
export class UserModule {}