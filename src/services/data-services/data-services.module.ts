import { Module } from "@nestjs/common";
import { TypeormDataServicesModule } from "src/frameworks/data-services/typeorm/typeorm-data-services.module";
// import { MongoDataServicesModule } from '../../frameworks/data-services/mongo/mongo-data-services.module';

@Module({
  imports: [TypeormDataServicesModule],
  exports: [TypeormDataServicesModule],
})
export class DataServicesModule {}
