/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import {
  DriverPaginationResponse,
  DriverUpdaStatusBody,
  DriverUpdaStatusResponse,
  DriverUpdateBody,
  DriverUpdateBodyResponse,
} from './types';

@ApiTags('drivers')
@Controller('tms/drivers')
export class DriversController {
  @ApiOkResponse({
    type: DriverPaginationResponse,
  })
  @ApiQuery({
    name: 'knowSources',
    required: true,
    type: String,
    isArray: true,
  })
  @ApiQuery({
    name: 'query',
    required: false,
    type: String,
  })
  @ApiQuery({
    name: 'stores',
    required: false,
    type: String,
    isArray: true,
  })
  @ApiQuery({
    name: 'businesses',
    required: false,
    type: String,
    isArray: true,
  })
  @ApiQuery({
    name: 'courier',
    required: false,
    type: String,
  })
  @ApiQuery({
    name: 'status',
    required: false,
    type: String,
  })
  @Get()
  list(): DriverPaginationResponse {
    const res: DriverPaginationResponse = {
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
    type: DriverUpdateBodyResponse,
  })
  @Post()
  save(@Body() body: DriverUpdateBody): DriverUpdateBodyResponse {
    const res: DriverUpdateBodyResponse = {
      id: 'id',
      ...body,
    };
    return res;
  }

  @ApiOkResponse({
    type: DriverUpdateBodyResponse,
  })
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() body: DriverUpdateBody,
  ): DriverUpdateBodyResponse {
    const res: DriverUpdateBodyResponse = {
      id,
      ...body,
    };
    return res;
  }

  @ApiOkResponse({
    type: DriverUpdaStatusResponse,
  })
  @Put(':id/status')
  updateStatus(
    @Param('id') _id: string,
    @Body() _body: DriverUpdaStatusBody,
  ): DriverUpdaStatusResponse {
    const res: DriverUpdaStatusResponse = {
      success: true,
    };
    return res;
  }
}
