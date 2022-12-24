import { Module } from "@nestjs/common";
import { DataServicesModule } from "src/services/data-services/data-services.module";
import { GenreUseCases } from "./genre.use-case";

@Module({
  imports: [DataServicesModule],
  providers: [GenreUseCases],
  exports: [GenreUseCases],
})
export class GenreUseCasesModule {}
