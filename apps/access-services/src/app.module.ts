import { join } from 'path';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AppConfigModule } from './config/app/config.module';
import { DatabaseMySqlConfigModule } from './config/database/mysql/config.module';
import { UserModule } from './users/users.module';
import { RoleModule } from './roles/roles.module';
import { RoleTypeModule } from './roleTypes/roleTypes.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'access-ui/dist'),
    }),
    DatabaseMySqlConfigModule,
    RoleTypeModule,
    RoleModule,
    UserModule,
    AppConfigModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
