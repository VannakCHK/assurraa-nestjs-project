import { ApiProperty } from "@nestjs/swagger";
import { CategoryEntity } from "src/category/entities/category.entity";
import { CommentEntity } from "src/comment/entities/comment.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ContentEntity {
    @PrimaryGeneratedColumn()
    ContentID: number;

    @ApiProperty()
    @Column({ nullable: true })
    Tittle: string;

    @ApiProperty()
    @Column({ nullable: true })
    discretion: string;

    @ApiProperty()
    @Column({ nullable: true })
    Url: string;

    @OneToMany(() => CategoryEntity, CategoryEntity => CategoryEntity.contentEntity)
    categoryEntity: CategoryEntity;

    @OneToMany(() => CommentEntity, CommentEntity => CommentEntity.contentEntity)
    commentEntity: CommentEntity
}
