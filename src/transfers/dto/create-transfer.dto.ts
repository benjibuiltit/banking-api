import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsUUID, Min } from 'class-validator';
export class CreateTransferRequest {
  @IsUUID()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The account ID of the receiving account.',
  })
  toAccountId: string;

  @IsUUID()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The account ID of the sending account.',
  })
  fromAccountId: string;

  @IsInt()
  @Min(0)
  @ApiProperty({
    description: 'The amount to be transferred in pence.',
  })
  amount: number;
}
