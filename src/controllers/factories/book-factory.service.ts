import { Injectable } from "@nestjs/common";
import { Author, Book, Genre } from "src/core/entities";
import { CreateBookDto, UpdateBookDto } from "../dto";

@Injectable()
export class BookFactoryService {
  createNewBook(createBookDto: CreateBookDto, author: Author, genre: Genre) {
    const newBook = new Book();
    newBook.title = createBookDto.title;
    newBook.author = author;
    newBook.genre = genre;
    newBook.publishDate = createBookDto.publishDate;

    return newBook;
  }

  updateBook(updateBookDto: UpdateBookDto, author: Author, genre: Genre) {
    const newBook = new Book();
    newBook.title = updateBookDto.title;
    newBook.author = author;
    newBook.genre = genre;
    newBook.publishDate = updateBookDto.publishDate;

    return newBook;
  }
}
