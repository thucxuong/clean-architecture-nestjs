import { Module } from "@nestjs/common";
import { ScheduleModule } from "@nestjs/schedule";
import { BookUseCasesModule } from "src/use-cases/book";
import { ExportBookService } from "./export-book-service";

@Module({
  imports: [ScheduleModule.forRoot(), BookUseCasesModule],
  providers: [ExportBookService],
  exports: [ExportBookService],
})
export class ExportBookModule {}
