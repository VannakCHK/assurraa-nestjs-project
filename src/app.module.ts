import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContentModule } from './content/content.module';
import { CategoryModule } from './category/category.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './config/orm.config';
import { ReaderModule } from './reader/reader.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), ContentModule, CategoryModule, UserModule, ReaderModule, CommentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
