import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/services/data-services/data-services.module';
import { PositionFactoryService } from './position-factory.service';
import { PositionService } from './position.use-cases';
@Module({
    imports : [DataServicesModule],
    providers: [PositionFactoryService, PositionService],
    exports: [PositionFactoryService, PositionService]
})
export class PositionModule {}
