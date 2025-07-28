import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/services/data-services/data-services.module';
import { PositionFactoryService } from './position-factory.service';
import { PositionService } from './position.use-cases';
import { PositionResolver } from 'src/resolvers/position.resolver';
@Module({
    imports : [DataServicesModule],
    providers: [PositionFactoryService, PositionService, PositionResolver],
    exports: [PositionFactoryService, PositionService, PositionResolver]
})
export class PositionModule {}
