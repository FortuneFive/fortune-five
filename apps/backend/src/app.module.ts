import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { PrismaModule } from './lib/prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${__dirname}/config/env/.${process.env.NODE_ENV}.env`,
      load: [],
      isGlobal: true,
    }),
    UserModule,
    PostModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
}
