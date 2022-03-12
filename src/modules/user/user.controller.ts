import { Body, Controller, Get, HttpCode, HttpStatus, Inject, Injectable, Post, Req } from "@nestjs/common";
import { IsEmail, IsNotEmpty } from "class-validator";
import { User } from "../../domain/user.entity";
import { UserRepository } from "../../domain/user.repository";
import { Request } from 'express';

export class RegisterUserDto {
  @IsNotEmpty()
  readonly name: string

  @IsEmail()
  readonly email: string
}

@Controller('user')
export class UserController {

  constructor(
    @Inject('UserRepository') private userRepository: UserRepository,
  ) {}

  @Get()
  async hoge() {
    return {
      statusCode: HttpStatus.OK,
      item: 'hogehoge'
    }
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() registerUserDto: RegisterUserDto, @Req() req: Request) {
    const user = User.create({
      id: req.uid,
      name: registerUserDto.name,
      email: registerUserDto.email
    })

    await this.userRepository.save(user)

    return {
      statusCode: HttpStatus.CREATED,
      item: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    }
  }
}