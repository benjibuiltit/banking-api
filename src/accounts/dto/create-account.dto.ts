import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';

export class CreateAccountRequestDto {
  @IsOptional()
  @IsInt()
  @Min(0)
  @ApiProperty({
    description: 'The deposit amount to initialize the account with.',
  })
  initialDeposit?: number;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty({
    description: 'The customer ID of the account owner.',
  })
  customerId: number;

  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'A customer defined name for the account.',
  })
  name: string;
}
