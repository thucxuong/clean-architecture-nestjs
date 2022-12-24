import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IDataServices } from "src/core";
import { MongoGenericRepository } from "./mongo-generic-repository";
import {
  Author,
  AuthorDocument,
  Book,
  BookDocument,
  Genre,
  GenreDocument,
} from "./model";
import { MongoBookRepository } from "./book/mongo-book-repository";

@Injectable()
export class MongoDataServices
  implements IDataServices, OnApplicationBootstrap
{
  authors: MongoGenericRepository<Author>;
  books: MongoBookRepository;
  genres: MongoGenericRepository<Genre>;

  constructor(
    @InjectModel(Author.name)
    private AuthorRepository: Model<AuthorDocument>,
    @InjectModel(Book.name)
    private BookRepository: Model<BookDocument>,
    @InjectModel(Genre.name)
    private GenreRepository: Model<GenreDocument>
  ) {}

  onApplicationBootstrap() {
    this.authors = new MongoGenericRepository<Author>(this.AuthorRepository);
    this.books = new MongoBookRepository(this.BookRepository, [
      "author",
      "genre",
    ]);
    this.genres = new MongoGenericRepository<Genre>(this.GenreRepository);
  }
}
