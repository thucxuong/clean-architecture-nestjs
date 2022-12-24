import { Controller, Get, Param, Post, Body, Put } from "@nestjs/common";
import { AuthorUseCases } from "src/use-cases/author/author.use-case";
import { GenreUseCases } from "src/use-cases/genre/genre.use-case";
import { BookUseCases } from "src/use-cases/book";
import { CreateBookDto, UpdateBookDto } from "./dto";
import { CreateBookResponseDto } from "./dto/create-book-response.dto";
import { BookFactoryService } from "./factories/book-factory.service";

@Controller("api/book")
export class BookController {
  constructor(
    private bookUseCases: BookUseCases,
    private authorUseCases: AuthorUseCases,
    private genreUseCases: GenreUseCases,
    private bookFactoryService: BookFactoryService
  ) {}

  @Get()
  async getAll() {
    return this.bookUseCases.getAllBooks();
  }

  @Get(":id")
  async getById(@Param("id") id: string) {
    return this.bookUseCases.getBookById(id);
  }

  @Post()
  async createBook(
    @Body() bookDto: CreateBookDto
  ): Promise<CreateBookResponseDto> {
    const createBookResponse = new CreateBookResponseDto();
    try {
      const author = await this.authorUseCases.getAuthorById(bookDto.authorId);
      const genre = await this.genreUseCases.getGenreById(bookDto.genreId);
      const book = this.bookFactoryService.createNewBook(
        bookDto,
        author,
        genre
      );
      const createdBook = await this.bookUseCases.createBook(book);

      createBookResponse.success = true;
      createBookResponse.createdBook = createdBook;
    } catch (error) {
      // report and log error
      console.log(error);
      createBookResponse.success = false;
    }

    return createBookResponse;
  }

  @Put(":id")
  async updateBook(
    @Param("id") bookId: string,
    @Body() updateBookDto: UpdateBookDto
  ) {
    const author = await this.authorUseCases.getAuthorById(
      updateBookDto.authorId
    );
    const genre = await this.genreUseCases.getGenreById(updateBookDto.genreId);
    const book = this.bookFactoryService.updateBook(
      updateBookDto,
      author,
      genre
    );
    return this.bookUseCases.updateBook(bookId, book);
  }
}
