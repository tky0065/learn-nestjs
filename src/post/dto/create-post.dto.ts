import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, MaxLength, MinLength } from 'class-validator';

export class CreatePostDto {
  @ApiProperty()
  @IsNotEmpty()
  @MinLength(3)
  title: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @MaxLength(300)
  content?: string;

  @ApiProperty({ required: false, default: false })
  published?: boolean = false;

  @ApiProperty({ required: false, type: 'number' })
  // @Transform(({ value }) => parseInt(value))
  authorId?: number;
}
