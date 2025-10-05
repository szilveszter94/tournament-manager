import { ApiProperty } from '@nestjs/swagger';

export class PaginationData {
  @ApiProperty({ example: 42 })
  totalPages: number;
  @ApiProperty({ example: 42 })
  totalItems: number;
}
