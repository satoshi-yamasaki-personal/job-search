import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
// import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(@Req() request: Request): string {
    // return this.appService.getHello();
    console.log('Hello.....');
    console.log(request.body);
    return 'Hello ' + request.body.email + '!';
  }
  @Post('/hello')
  postHello(@Req() request: Request): string {
    console.log('Post....');
    console.log(request.body);
    return 'Hello ' + request.body.email + '!';
  }
  // @Get('google')
  // @UseGuards(AuthGuard('google'))
  // async googleAuth(@Req() req) {}

  // @Get('google/redirect')
  // @UseGuards(AuthGuard('google'))
  // googleAuthRedirect(@Req() req) {
  //   return this.appService.googleLogin(req)
  // }

}
