import { Module } from "@nestjs/common";
import { IDataServices } from "src/core";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthorEntity, BookEntity, GenreEntity } from "./typeorm-entities";
import { TypeORMDataServices } from "./typeorm-data-services.service";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      synchronize: true,
      autoLoadEntities: true,
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "postgres",
      database: "clean-architect",
    }),
    TypeOrmModule.forFeature([BookEntity, GenreEntity, AuthorEntity]),
  ],
  providers: [
    {
      provide: IDataServices,
      useClass: TypeORMDataServices,
    },
  ],
  exports: [IDataServices],
})
export class TypeormDataServicesModule {}
