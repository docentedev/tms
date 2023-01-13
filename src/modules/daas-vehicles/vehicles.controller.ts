/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { vehicleListResponseData } from 'src/modules/daas-vehicles/data/mock';
import {
  VehicleListResponse,
  VehiclePaginationResponse,
  VehicleUpdaStatusBody,
  VehicleUpdaStatusResponse,
  VehicleUpdateBody,
  VehicleUpdateResponse,
} from './types';

@ApiTags('vehicles')
@Controller('tms/vehicles')
export class VehiclesController {
  @ApiOkResponse({
    type: VehiclePaginationResponse,
  })
  @ApiQuery({
    name: 'knowSources',
    required: true,
    type: String,
    isArray: true,
  })
  @ApiQuery({
    name: 'licencePlace',
    required: false,
    type: String,
  })
  @ApiQuery({
    name: 'vehicleType',
    required: false,
    type: String,
  })
  @ApiQuery({
    name: 'propulsionType',
    required: false,
    type: String,
  })
  @ApiQuery({
    name: 'status',
    required: false,
    type: String,
  })
  @Get()
  list(): VehiclePaginationResponse {
    const res: VehiclePaginationResponse = {
      data: [],
      pagination: {
        isFirst: true,
        isLast: true,
        numberOfElements: 0,
        page: 0,
        pageSize: 0,
        totalElements: 0,
        totalPages: 0,
      },
    };
    return res;
  }

  @ApiOkResponse({
    type: VehicleUpdateResponse,
  })
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() body: VehicleUpdateBody,
  ): VehicleUpdateResponse {
    const res: VehicleUpdateResponse = {
      id,
      ...body,
    };
    return res;
  }

  @ApiOkResponse({
    type: VehicleUpdateResponse,
  })
  @Post()
  save(@Body() body: VehicleUpdateBody): VehicleUpdateResponse {
    const res: VehicleUpdateResponse = {
      id: 'id',
      ...body,
    };
    return res;
  }

  @ApiOkResponse({
    type: VehicleUpdaStatusResponse,
  })
  @Put(':id/status')
  updateStatus(
    @Param('id') _id: string,
    @Body() _body: VehicleUpdaStatusBody,
  ): VehicleUpdaStatusResponse {
    const res: VehicleUpdaStatusResponse = {
      success: true,
    };
    return res;
  }

  @ApiQuery({
    name: 'query',
    required: false,
    type: String,
  })
  @ApiOkResponse({
    type: VehicleListResponse,
    isArray: true,
  })
  @Get('allowed')
  allowed(): VehicleListResponse[] {
    const res: VehicleListResponse[] = [
      vehicleListResponseData,
      vehicleListResponseData,
      vehicleListResponseData,
      vehicleListResponseData,
    ];
    return res;
  }
}
