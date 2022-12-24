import { NotFoundException } from "@nestjs/common";
import { instanceToPlain } from "class-transformer";
import { IGenericRepository } from "src/core";
import { Repository, DeepPartial } from "typeorm";

export class TypeORMGenericRepository<T extends object>
  implements IGenericRepository<T>
{
  constructor(protected repository: Repository<T>) {}

  getAll(): Promise<T[]> {
    return this.repository.find();
  }

  async get(id: any): Promise<T> {
    const item = await this.repository.findOne(id);
    if (!item) {
      throw new NotFoundException();
    }
    return item;
  }

  create(item: T): Promise<T> {
    const newItem = this.repository.create(item as DeepPartial<T>);
    return this.repository.save(newItem as DeepPartial<T>);
  }

  async update(id: string, item: T) {
    const obj = await this.repository.findOne(id);
    return this.repository.save({
      ...instanceToPlain(obj),
      ...instanceToPlain(item),
    } as DeepPartial<T>);
  }
}
