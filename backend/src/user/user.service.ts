import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  
  async create(createUserDto: UserDto) {
    const userExist = await this.findOneById(createUserDto.id);
    if(userExist) {
      throw new Error("User already exists");
    }

    const user = await this.prisma.user.create({
      data: createUserDto
    }); 

    return user;
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  async findOneById(id: number): Promise <UserDto>{
    return await this.prisma.user.findUnique({
      where: {
        id
      }
    })
  }

  async findOneBEmail(email: string): Promise <UserDto>{
    return await this.prisma.user.findUnique({
      where: {
        email
      }
    })
  }

  async update(id: number, updateUserDto: UserDto) {
    const userExist = await this.findOneById(updateUserDto.id)
    if(!userExist) {
      throw new Error("User does not exist");
    }

    return await this.prisma.user.update({
      data: updateUserDto,
      where: {
        id
      }
    });
  }

  async remove(id: number): Promise<UserDto>{
    const userExist = await this.findOneById(id);
    if(!userExist) {
      throw new Error("User does not exist");
    }
      
    return await this.prisma.user.delete({
      where: {
        id
      }
    });
  }

  async userExist(userId: number): Promise<boolean>{
    const user = await this.findOneById(userId);
    return user === null;
  }
}
