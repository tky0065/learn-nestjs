import { Post } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class PostEntity implements Post {
  constructor(partial: Partial<PostEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty({ required: false })
  content: string;

  @ApiProperty({ required: false, default: false })
  published: boolean;

  @ApiProperty({ required: false })
  authorId: number;
}
