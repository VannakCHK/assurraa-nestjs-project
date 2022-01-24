import { PartialType } from '@nestjs/swagger';
import { CreateReaderDto } from './create-reader.dto';

export class UpdateReaderDto extends PartialType(CreateReaderDto) {}
