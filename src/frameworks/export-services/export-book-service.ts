import { Injectable } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";
import { ExportService } from "src/core/abstracts/export-service.abstract";
import { BookUseCases } from "src/use-cases/book";
import { promises as fs } from "fs";
import { Parser } from "json2csv";

@Injectable()
export class ExportBookService extends ExportService {
  constructor(private bookUseCases: BookUseCases) {
    super();
  }

  @Cron("45 * * * * *")
  async export() {
    const books = await this.bookUseCases.getAllBooks();
    const booksJSON = books.map((item) => ({
      title: item.title,
      publishDate: item.publishDate,
      genre: item.genre.name,
      author: `${item.author.firstName} ${item.author.lastName}`,
    }));
    const json2csvParser = new Parser({
      fields: ["title", "author", "genre", "publishDate"],
    });
    const csv = json2csvParser.parse(booksJSON);
    await fs.writeFile(
      `books-${new Date().toISOString().substring(0, 10)}.csv`,
      csv
    );
  }
}
