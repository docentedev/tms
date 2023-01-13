import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VehiclesModule } from './modules/daas-vehicles/vehicles.module';
import { DriversModule } from './modules/daas-drivers/drivers.module';
import { CommonModule } from './modules/daas-common/common.module';

@Module({
  imports: [VehiclesModule, DriversModule, CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
