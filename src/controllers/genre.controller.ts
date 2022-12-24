import { Controller, Get, Param, Post, Body, Put } from "@nestjs/common";
import { GenreUseCases } from "src/use-cases/genre";
import { CreateGenreDto, UpdateGenreDto } from "./dto/genre.dto";
import { GenreFactoryService } from "./factories/genre-factory.service";

@Controller("api/genre")
export class GenreController {
  constructor(
    private genreUseCases: GenreUseCases,
    private genreFactoryService: GenreFactoryService
  ) {}

  @Get()
  async getAll() {
    return this.genreUseCases.getAllGenres();
  }

  @Get(":id")
  async getById(@Param("id") id: string) {
    return this.genreUseCases.getGenreById(id);
  }

  @Post()
  createGenre(@Body() genreDto: CreateGenreDto) {
    const genre = this.genreFactoryService.createNewGenre(genreDto);
    return this.genreUseCases.createGenre(genre);
  }

  @Put(":id")
  updateGenre(
    @Param("id") genreId: string,
    @Body() updateGenreDto: UpdateGenreDto
  ) {
    const genre = this.genreFactoryService.updateGenre(updateGenreDto);
    return this.genreUseCases.updateGenre(genreId, genre);
  }
}
