import { ApiProperty } from '@nestjs/swagger';

enum VehicleTypeEnum {
  TRUCK = 'TRUCK',
  MOTORCYCLE = 'MOTORCYCLE',
  BICYCLE = 'BICYCLE',
  CAR = 'CAR',
  PICKUP_TRUCK = 'PICKUP_TRUCK',
}

export class VehicleType {
  @ApiProperty()
  id: string;
  @ApiProperty({
    enum: VehicleTypeEnum,
  })
  name: string;
}

enum PropulsionTypeEnum {
  GAS = 'GAS',
  GASOLINE = 'GASOLINE',
  PETROLEUM = 'PETROLEUM',
  ELECTRIC = 'ELECTRIC',
  NOT_APPLY = 'NOT_APPLY',
}

export class PropulsionType {
  @ApiProperty()
  id: string;
  @ApiProperty({
    enum: PropulsionTypeEnum,
  })
  name: string;
}

class Status {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
}

class Statistics {
  @ApiProperty()
  hoursOnRoad: number;
  @ApiProperty()
  kilometersTraveled: number;
  @ApiProperty()
  dispatchedPackages: number;
}

export class Courier {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
}

class DriverVehicle {
  @ApiProperty()
  name: string;
  @ApiProperty()
  lastName: string;
  @ApiProperty()
  fullName: string;
  @ApiProperty()
  courier: Courier;
  @ApiProperty()
  user: string;
}

export class VehicleListResponse {
  @ApiProperty()
  id: string;
  @ApiProperty()
  licencePlate: string;
  @ApiProperty()
  vehicleType: VehicleType;
  @ApiProperty()
  propulsionType: PropulsionType;
  @ApiProperty()
  status: Status;
  @ApiProperty()
  statistics: Statistics;
  @ApiProperty()
  driver: DriverVehicle;
  @ApiProperty()
  brand: string;
  @ApiProperty()
  createdBy: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
}

export class Pagination {
  @ApiProperty()
  isFirst: boolean;
  @ApiProperty()
  isLast: boolean;
  @ApiProperty()
  numberOfElements: number;
  @ApiProperty()
  page: number;
  @ApiProperty()
  pageSize: number;
  @ApiProperty()
  totalElements: number;
  @ApiProperty()
  totalPages: number;
}

export class VehiclePaginationResponse {
  @ApiProperty({
    type: [VehicleListResponse],
  })
  data: VehicleListResponse[];
  @ApiProperty()
  pagination: Pagination;
}

export class VehicleUpdateBody {
  @ApiProperty()
  licencePlate: string;
  @ApiProperty()
  propulsionType: string;
  @ApiProperty()
  vehicleType: string;
}

export class VehicleUpdateResponse extends VehicleUpdateBody {
  @ApiProperty()
  id: string;
}

export class VehicleUpdaStatusBody {
  @ApiProperty()
  status: boolean;
  @ApiProperty()
  message: string;
  @ApiProperty()
  driver: boolean;
}

export class VehicleUpdaStatusResponse {
  @ApiProperty()
  success: boolean;
}
