import { ApiProperty } from "@nestjs/swagger";
import { ContentEntity } from "src/content/entities/content.entity";
import { ReaderEntity } from "src/reader/entities/reader.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CommentEntity {
    @PrimaryGeneratedColumn()
    CommentID: number;

    @ApiProperty()
    @Column({ nullable: true })
    Name: string;

    @ApiProperty()
    @Column({ nullable: true })
    Email: string;

    @ApiProperty()
    @Column({ nullable: true })
    Comment: string;

    @ManyToOne(() => ContentEntity, ContentEntity => ContentEntity.commentEntity)
    @JoinColumn({ name: 'ContentID', referencedColumnName: 'ContentID' })
    contentEntity: ContentEntity;
    @Column({ nullable: true })
    ContentID: number;

    @ManyToOne(() => ReaderEntity, ReaderEntity => ReaderEntity.commentEntity)
    @JoinColumn({ name: 'ReaderID', referencedColumnName: 'ReaderID' })
    readerEntity: ReaderEntity;
    @ApiProperty()
    @Column({ nullable: true })
    ReaderID: number;
}
