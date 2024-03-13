import { IsBoolean, IsOptional, IsNumber } from 'class-validator';

export class TrackerSessionDto {
  @IsOptional()
  @IsBoolean()
  isCompleted: boolean;
}

export class TrackerRoundDto {
  @IsNumber()
  totalSeconds: number;

  @IsOptional()
  @IsBoolean()
  isCompleted: boolean;
}
