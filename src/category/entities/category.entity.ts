import { ApiProperty } from "@nestjs/swagger";
import { ContentEntity } from "src/content/entities/content.entity";
import { UserEntity } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CategoryEntity {
    @PrimaryGeneratedColumn()
    CategoryID: number;

    @ManyToOne(() => ContentEntity, ContentEntity => ContentEntity.categoryEntity)
    @JoinColumn({ name: 'ContentID', referencedColumnName: 'ContentID' })
    contentEntity: ContentEntity;
    @Column({ nullable: true })
    @ApiProperty()
    ContentID: number;

    @ManyToOne(() => UserEntity, UserEntity => UserEntity.categoryEntity)
    @JoinColumn({ name: 'UserID', referencedColumnName: 'UserID' })
    userEntity: UserEntity;
    @ApiProperty()
    @Column({ nullable: true })
    UserID: number;

    @ApiProperty()
    @Column({ nullable: true })
    Menu: string;

}
