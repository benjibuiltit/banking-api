import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCustomerRequest {
  @IsString()
  @IsNotEmpty()
  @IsNotEmpty()
  @ApiProperty({
    description: "The customer's name",
  })
  name: string;
}
