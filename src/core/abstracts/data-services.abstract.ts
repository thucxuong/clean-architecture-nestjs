import { Author, Genre } from "../entities";
import { BookRespository } from "./book-repository.abstract";
import { IGenericRepository } from "./generic-repository.abstract";

export abstract class IDataServices {
  abstract authors: IGenericRepository<Author>;

  abstract books: BookRespository;

  abstract genres: IGenericRepository<Genre>;
}
