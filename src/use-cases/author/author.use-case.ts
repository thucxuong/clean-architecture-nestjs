import { Injectable } from "@nestjs/common";
import { Author } from "src/core/entities";
import { IDataServices } from "src/core/abstracts";

@Injectable()
export class AuthorUseCases {
  constructor(private dataServices: IDataServices) {}

  getAllAuthors(): Promise<Author[]> {
    return this.dataServices.authors.getAll();
  }

  getAuthorById(id: any): Promise<Author> {
    return this.dataServices.authors.get(id);
  }

  createAuthor(author: Author): Promise<Author> {
    return this.dataServices.authors.create(author);
  }

  updateAuthor(authorId: string, author: Author): Promise<Author> {
    return this.dataServices.authors.update(authorId, author);
  }
}
