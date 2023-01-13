import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import {
  DriverListResponseGender,
  DriverListResponseStatus,
  PropulsionType,
  VehicleType,
} from 'src/types';

@ApiTags('common')
@Controller('tms/common')
export class CommonController {
  @ApiOkResponse({
    type: DriverListResponseGender,
    isArray: true,
  })
  @Get('genders')
  listGenders(): DriverListResponseGender[] {
    return [
      {
        id: 'string',
        name: 'MALE',
      },
      {
        id: 'string',
        name: 'FEMALE',
      },
    ];
  }
  @ApiOkResponse({
    type: VehicleType,
    isArray: true,
  })
  @Get('vehicle-types')
  listVehicleTypes(): VehicleType[] {
    return [
      {
        id: 'CARD',
        name: 'CARD',
      },
      {
        id: 'BICYCLE',
        name: 'BICYCLE',
      },
      {
        id: 'TRUCK',
        name: 'TRUCK',
      },
      {
        id: 'ELECTRIC_CAR',
        name: 'ELECTRIC_CAR',
      },
      {
        id: 'PICK_UP',
        name: 'PICK_UP',
      },
      {
        id: 'MOTORCYCLE',
        name: 'MOTORCYCLE',
      },
      {
        id: 'OTHER',
        name: 'OTHER',
      },
    ];
  }
  @ApiOkResponse({
    type: PropulsionType,
    isArray: true,
  })
  @Get('propulsion-types')
  listPropulsionTypes(): PropulsionType[] {
    return [
      {
        id: 'OIL',
        name: 'OIL',
      },
      {
        id: 'ELECTRIC',
        name: 'ELECTRIC',
      },
      {
        id: 'GAS',
        name: 'GAS',
      },
    ];
  }
  @ApiOkResponse({
    type: DriverListResponseStatus,
    isArray: true,
  })
  @Get('vehicle-status')
  listVehicleStatus(): DriverListResponseStatus[] {
    return [
      {
        id: 'ALLOWED',
        name: 'ALLOWED',
      },
      {
        id: 'IN_ROUTE',
        name: 'IN_ROUTE',
      },
      {
        id: 'NOT_ALLOWED',
        name: 'NOT_ALLOWED',
      },
      {
        id: 'NOT_ALLOWED',
        name: 'WITHOUT_DRIVER',
      },
    ];
  }
}
