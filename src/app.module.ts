import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';
import { TimeBlocksModule } from './time-block/time-block.module';
import { TrackerModule } from './tracker/tracker.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    UserModule,
    TaskModule,
    TimeBlocksModule,
    TrackerModule,
  ],
})
export class AppModule {}
