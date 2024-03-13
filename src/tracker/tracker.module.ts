import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { TrackerController } from './tracker.controller';
import { TrackerService } from './tracker.service';

@Module({
  controllers: [TrackerController],
  providers: [TrackerService, PrismaService],
  exports: [TrackerService],
})
export class TrackerModule {}
