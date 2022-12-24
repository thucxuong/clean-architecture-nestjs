import { Author, Genre } from "./";

export class Book {
  title: string;
  author: Author;
  genre: Genre;
  publishDate: Date;
}

export interface IBook extends Book {}
