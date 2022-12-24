import { Module } from "@nestjs/common";
import {
  AppController,
  BookController,
  AuthorController,
  GenreController,
} from "src/controllers";
import { BookUseCasesModule } from "src/use-cases/book";
import { GenreUseCasesModule } from "src/use-cases/genre";
import { AuthorUseCasesModule } from "src/use-cases/author";
import { CrmServicesModule } from "src/services/crm-services/crm-services.module";
import factories from "src/controllers/factories";
import { ExportBookModule } from "./frameworks/export-services/export-book-service.module";

@Module({
  imports: [
    BookUseCasesModule,
    AuthorUseCasesModule,
    GenreUseCasesModule,
    CrmServicesModule,
    ExportBookModule,
  ],
  controllers: [
    AppController,
    BookController,
    AuthorController,
    GenreController,
  ],
  providers: [...factories],
})
export class AppModule {}
