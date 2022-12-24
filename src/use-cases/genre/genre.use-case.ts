import { Injectable } from "@nestjs/common";
import { Genre, IDataServices } from "src/core";

@Injectable()
export class GenreUseCases {
  constructor(private dataServices: IDataServices) {}

  getAllGenres(): Promise<Genre[]> {
    return this.dataServices.genres.getAll();
  }

  getGenreById(id: any): Promise<Genre> {
    return this.dataServices.genres.get(id);
  }

  createGenre(genre: Genre): Promise<Genre> {
    return this.dataServices.genres.create(genre);
  }

  updateGenre(genreId: string, genre: Genre): Promise<Genre> {
    return this.dataServices.genres.update(genreId, genre);
  }
}
