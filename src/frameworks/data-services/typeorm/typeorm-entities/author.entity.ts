import { IBook, IAuthor } from "src/core";
import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BookEntity } from "./book.entity";

export interface IAuthorEntity extends IAuthor {
  books: IBook[];
}

@Entity("author")
export class AuthorEntity implements IAuthorEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @OneToMany(() => BookEntity, (book) => book.author)
  books: BookEntity[];
}
