import { IBookEntity } from "../typeorm-entities";
import { TypeORMGenericRepository } from "../typeorm-generic-repository";
import { Repository } from "typeorm";

export class TypeORMBookRepository extends TypeORMGenericRepository<IBookEntity> {
  constructor(repository: Repository<IBookEntity>) {
    super(repository);
  }

  getX(): Promise<IBookEntity[]> {
    return this.repository.find();
  }
}
