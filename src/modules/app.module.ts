import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';
import { PreauthMiddleware } from '../auth/preauth.middleware';
import { GoogleStrategy } from '../google.strategy';
import { UserController } from './user/user.controller';
import { UserModule } from '../modules/user/user.module';

@Module({
  // imports: [UserModule],
  // controllers: [AppController, UserController],
  controllers: [AppController],
  // providers: [AppService, GoogleStrategy],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(PreauthMiddleware).forRoutes({
      path: '*', method: RequestMethod.ALL
    })
  }
}
