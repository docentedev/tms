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
        id: 'string',
        name: 'TRUCK',
      },
      {
        id: 'string',
        name: 'CAR',
      },
    ];
  }
  @ApiOkResponse({
    type: PropulsionType,
    isArray: true,
  })
  @Get('propulsion-types')
  listPropulsionTypes(): PropulsionType[] {
    return [];
  }
  @ApiOkResponse({
    type: DriverListResponseStatus,
    isArray: true,
  })
  @Get('vehicle-statuses')
  listVehicleStatuses(): DriverListResponseStatus[] {
    return [
      {
        id: 'string',
        name: 'STATUS_A',
      },
      {
        id: 'string',
        name: 'STATUS_B',
      },
    ];
  }
}
