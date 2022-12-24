import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { IDataServices, IGenericRepository } from "src/core";
import {
  BookEntity,
  IBookEntity,
  GenreEntity,
  IGenreEntity,
  AuthorEntity,
  IAuthorEntity,
} from "./typeorm-entities";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { TypeORMGenericRepository } from "./typeorm-generic-repository";
import { TypeORMBookRepository } from "./book/typeorm-book-repository";

@Injectable()
export class TypeORMDataServices
  implements IDataServices, OnApplicationBootstrap
{
  public books: TypeORMBookRepository;
  public authors: TypeORMGenericRepository<IAuthorEntity>;
  public genres: TypeORMGenericRepository<IGenreEntity>;

  constructor(
    @InjectRepository(BookEntity) private bookRepo: Repository<IBookEntity>,
    @InjectRepository(GenreEntity) private genreRepo: Repository<IGenreEntity>,
    @InjectRepository(AuthorEntity)
    private authorRepo: Repository<IAuthorEntity>
  ) {}

  onApplicationBootstrap() {
    this.authors = new TypeORMGenericRepository<IAuthorEntity>(this.authorRepo);
    this.books = new TypeORMBookRepository(this.bookRepo);
    this.genres = new TypeORMGenericRepository<IGenreEntity>(this.genreRepo);
  }
}
