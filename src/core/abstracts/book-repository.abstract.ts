import { Book } from "../entities";
import { IGenericRepository } from "./generic-repository.abstract";

export abstract class BookRespository extends IGenericRepository<Book> {
  abstract getX(): Promise<Book[]>;
}
