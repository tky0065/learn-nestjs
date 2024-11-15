import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import { PostEntity } from './entities/post.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  @ApiCreatedResponse({
    type: PostEntity,
    description: 'The record has been successfully created.',
  })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async create(@Body() createPostDto: CreatePostDto) {
    return new PostEntity(await this.postService.create(createPostDto));
  }

  @Get()
  @ApiOkResponse({
    type: [PostEntity],
    description: 'The records have been successfully retrieved.',
  })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async findAll() {
    const posts = await this.postService.findAll();
    return posts.map((post) => new PostEntity(post));
  }

  // @Get('page')
  // async findPage() {
  //   return this.postService.findPage();
  // }
  @Get(':id')
  @ApiOkResponse({
    type: PostEntity,
    description: 'The record has been successfully retrieved.',
  })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async findOne(@Param('id') id: string) {
    return new PostEntity(await this.postService.findOne(+id));
  }

  @Patch(':id')
  @ApiCreatedResponse({
    type: PostEntity,
    description: 'The record has been successfully updated.',
  })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return new PostEntity(await this.postService.update(+id, updatePostDto));
  }

  @Delete(':id')
  @ApiOkResponse({
    type: PostEntity,
    description: 'The record has been successfully deleted.',
  })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async remove(@Param('id') id: string) {
    return new PostEntity(await this.postService.remove(+id));
  }
}
