import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class UpdatePostDto extends PartialType(CreatePostDto) {
  @ApiProperty()
  title: string;

  @ApiProperty({ required: false })
  @IsOptional()
  content?: string;
  @ApiProperty({ required: false, default: false })
  published?: boolean = false;

  @ApiProperty({ required: false })
  authorId?: number;
}
