import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  Min,
} from 'class-validator';

export class CreateAccountRequest {
  @IsInt()
  @IsOptional()
  @Min(0)
  @ApiPropertyOptional()
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
  @ApiPropertyOptional()
  @ApiProperty({
    description: 'A customer defined name for the account.',
  })
  name?: string;
}
