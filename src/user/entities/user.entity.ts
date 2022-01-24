import { ApiProperty } from "@nestjs/swagger";
import { CategoryEntity } from "src/category/entities/category.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    UserID: number;

    @ApiProperty()
    @Column({ nullable: true })
    Name: string;

    @ApiProperty()
    @Column({ nullable: true })
    Gender: string;

    @ApiProperty()
    @Column({ nullable: true })
    Address: string;

    @ApiProperty()
    @Column({ nullable: true })
    Email: string;

    @OneToMany(() => CategoryEntity, CategoryEntity => CategoryEntity.userEntity)
    categoryEntity: CategoryEntity;
}
