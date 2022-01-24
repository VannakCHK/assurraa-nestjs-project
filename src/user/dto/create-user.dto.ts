import { IsString } from "class-validator";

export class CreateUserDto {

    @IsString()
    Name: string;

    @IsString()
    Gender: string;

    @IsString()
    Address: string;

    @IsString()
    Email: string;

}
