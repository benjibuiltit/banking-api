import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  Min,
} from 'class-validator';

export class CreateAccountRequest {
  @IsOptional()
  @IsInt()
  @Min(0)
  @ApiProperty({
    description:
      'The deposit amount (in pence) to initialize the account with.',
  })
  initialDeposit?: number;

  @IsNotEmpty()
  @IsUUID()
  @ApiProperty({
    description: 'The customer ID of the account owner.',
  })
  customerId: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'A customer defined name for the account.',
  })
  name?: string;
}
