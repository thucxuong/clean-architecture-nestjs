import { Controller, Get, Param, Post, Body, Put } from "@nestjs/common";

import { CreateAuthorDto, UpdateAuthorDto } from "src/controllers/dto";
import { AuthorUseCases } from "src/use-cases/author/author.use-case";
import { AuthorFactoryService } from "src/controllers/factories/author-factory.service";

@Controller("api/author")
export class AuthorController {
  constructor(
    private authorUseCases: AuthorUseCases,
    private authorFactoryService: AuthorFactoryService
  ) {}

  @Get()
  async getAll() {
    return this.authorUseCases.getAllAuthors();
  }

  @Get(":id")
  async getById(@Param("id") id: string) {
    return this.authorUseCases.getAuthorById(id);
  }

  @Post()
  createAuthor(@Body() authorDto: CreateAuthorDto) {
    const author = this.authorFactoryService.createNewAuthor(authorDto);
    return this.authorUseCases.createAuthor(author);
  }

  @Put(":id")
  updateAuthor(
    @Param("id") authorId: string,
    @Body() updateAuthorDto: UpdateAuthorDto
  ) {
    const author = this.authorFactoryService.updateAuthor(updateAuthorDto);
    return this.authorUseCases.updateAuthor(authorId, author);
  }
}
