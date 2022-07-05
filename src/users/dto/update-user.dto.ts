import { PartialType } from '@nestjs/mapped-types';
import { CreaterUserDto } from './create-user.dto';

export class UptadeUserDto extends PartialType(CreaterUserDto) {}
