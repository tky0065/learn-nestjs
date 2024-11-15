import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PostModule } from './post/post.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { JwtStrategy } from './auth/jwt.strategy';
import { UsersService } from './users/users.service';

export const jwtSecret = 'zjP9h6ZI5LoSKCRj';

@Module({
  imports: [PostModule, AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, JwtStrategy, UsersService],
})
export class AppModule {}
