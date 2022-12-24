import { Model } from "mongoose";
import { Book } from "../model";
import { MongoGenericRepository } from "../mongo-generic-repository";

export class MongoBookRepository extends MongoGenericRepository<Book> {
  constructor(repository: Model<Book>, populateOnFind: string[] = []) {
    super(repository, populateOnFind);
  }

  getX(): Promise<Book[]> {
    return this._repository.find().populate(this._populateOnFind).exec();
  }
}
