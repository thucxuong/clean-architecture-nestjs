import { IsString, IsNotEmpty, IsDate } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  authorId: string;

  @IsNotEmpty()
  genreId: string;

  @IsDate()
  publishDate: Date;
}

export class UpdateBookDto extends PartialType(CreateBookDto) {}
