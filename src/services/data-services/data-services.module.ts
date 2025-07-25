import { Module } from "@nestjs/common";
import { GraphQLDataServicesModule } from "src/frameworks/graphQL/graphQL-data-services.module";
import { MongoDataServicesModule } from "src/frameworks/database/mongo-data-services.module";

@Module({
    imports: [
        GraphQLDataServicesModule,
        MongoDataServicesModule
    ],
    exports: [
        GraphQLDataServicesModule,
        MongoDataServicesModule
    ]
})
export class DataServicesModule {}