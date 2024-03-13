import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TrackerService } from './tracker.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CurrentUser } from 'src/auth/decorators/user.decorator';
import { TrackerRoundDto, TrackerSessionDto } from './dto/tracker.dto';

@Controller('user/tracker')
export class TrackerController {
  constructor(private readonly trackerService: TrackerService) {}

  @Get('today')
  @Auth()
  async getTodaySession(@CurrentUser('id') userId: string) {
    return this.trackerService.getTodaySession(userId);
  }

  @HttpCode(200)
  @Post()
  @Auth()
  async create(@CurrentUser('id') userId: string) {
    return this.trackerService.create(userId);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put('/round/:id')
  @Auth()
  async updateRound(@Param('id') id: string, @Body() dto: TrackerRoundDto) {
    return this.trackerService.updateRound(dto, id);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put(':id')
  @Auth()
  async update(
    @Body() dto: TrackerSessionDto,
    @Param('id') id: string,
    @CurrentUser('id') userId: string,
  ) {
    return this.trackerService.update(dto, id, userId);
  }

  @HttpCode(200)
  @Delete(':id')
  @Auth()
  async deleteSession(
    @Param('id') id: string,
    @CurrentUser('id') userId: string,
  ) {
    return this.trackerService.deleteSession(id, userId);
  }
}
