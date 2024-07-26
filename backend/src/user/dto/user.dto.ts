import { IsEmail, IsNotEmpty, IsNumberString, IsString } from "class-validator";

export class UserDto {
    @IsNumberString()
    id: number;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsString()
    name: string
}
