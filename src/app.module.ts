import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VehiclesModule } from './vehicles/vehicles.module';
import { DriversModule } from './drivers/drivers.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [VehiclesModule, DriversModule, CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
