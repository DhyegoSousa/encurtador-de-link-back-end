import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { LinksModule } from './links/links.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, LinksModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
