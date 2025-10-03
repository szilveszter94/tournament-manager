import { ApiProperty } from '@nestjs/swagger';

export class Pagination {
  @ApiProperty({ example: 42 })
  totalPages: number;
}
