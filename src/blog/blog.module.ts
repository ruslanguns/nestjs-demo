import { Module } from '@nestjs/common';
import { AuthorModule } from './author/author.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [AuthorModule, PostModule]
})
export class BlogModule {}
