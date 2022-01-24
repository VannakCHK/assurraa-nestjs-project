import { ApiProperty } from "@nestjs/swagger";
import { CommentEntity } from "src/comment/entities/comment.entity";
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ReaderEntity {
    @PrimaryGeneratedColumn()
    ReaderID: number;

    @ApiProperty()
    @Column({ nullable: true })
    Name: string;

    @ApiProperty()
    @Column({ nullable: true })
    email: string;

    @OneToMany(() => CommentEntity, CommentEntity => CommentEntity.readerEntity)
    commentEntity: CommentEntity;
}
