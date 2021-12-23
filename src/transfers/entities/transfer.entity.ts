import { ApiProperty } from '@nestjs/swagger';

export class Transfer {
  @ApiProperty({
    description: 'The unique transfer ID.',
  })
  id: string;

  @ApiProperty({
    description: 'The amount of the transfer in pence.',
  })
  amount: number;

  @ApiProperty({
    description: 'The id of the receiving account.',
  })
  fromAccountId: string;

  @ApiProperty({
    description: 'The id of the sending account.',
  })
  toAccountId: string;

  @ApiProperty({
    description: 'ISO 8601 formatted transfer creation date.',
  })
  createdAt: Date;
}
