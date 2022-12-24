import { IBook } from "src/core";
import { GenreEntity } from "./genre.entity";
import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AuthorEntity } from "./author.entity";

export type IBookEntity = IBook;

@Entity("book")
export class BookEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  publishDate: Date;

  @ManyToOne(() => GenreEntity, (genre) => genre.books)
  genre: GenreEntity;

  @ManyToOne(() => AuthorEntity, (author) => author.books)
  author: AuthorEntity;
}
