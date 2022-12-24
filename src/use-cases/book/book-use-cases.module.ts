import { Module } from "@nestjs/common";
import { DataServicesModule } from "src/services/data-services/data-services.module";
import { CrmServicesModule } from "src/services/crm-services/crm-services.module";
import { BookUseCases } from "./book.use-case";

@Module({
  imports: [DataServicesModule, CrmServicesModule],
  providers: [BookUseCases],
  exports: [BookUseCases],
})
export class BookUseCasesModule {}
