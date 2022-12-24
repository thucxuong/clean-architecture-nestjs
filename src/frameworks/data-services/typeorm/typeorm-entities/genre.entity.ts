import { IBook, IGenre } from "src/core";
import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BookEntity } from "./book.entity";

export interface IGenreEntity extends IGenre {
  books: IBook[];
}

@Entity("genre")
export class GenreEntity implements IGenreEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @OneToMany(() => BookEntity, (book) => book.genre)
  books: BookEntity[];
}
