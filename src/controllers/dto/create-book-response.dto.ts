import { Book } from "src/core";

export class CreateBookResponseDto {
  success: boolean;

  createdBook: Book;
}
