import { ApiProperty } from '@nestjs/swagger';
import { Courier, Pagination } from 'src/modules/daas-vehicles/types';

export class DriverListResponseVehicle {
  @ApiProperty()
  id: string;
  @ApiProperty()
  licencePlace: string;
}
export class DriverListResponseStatus {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
}

enum GenderEnum {
  MALE = 'MALE',
  FAMLE = 'FEMALE',
  NO_BINARY = 'NO_BINARY',
  NOT_SPECIFIED = 'NOT_SPECIFIED',
}

export class DriverListResponseGender {
  @ApiProperty()
  id: string;
  @ApiProperty({
    enum: GenderEnum,
  })
  name: string;
}
export class DriverListResponseBusiness {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
}
export class DriverListResponseStore {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
}
export class DriverListResponseStatistics {
  @ApiProperty()
  hoursOnRoad: number;
  @ApiProperty()
  kilometersTraveled: number;
  @ApiProperty()
  dispatchedPackages: number;
  @ApiProperty()
  dispatchedPackagesOnTime: number;
}
export class DriverListResponse {
  @ApiProperty()
  name: string;
  @ApiProperty()
  lastName: string;
  @ApiProperty()
  fullName: string;
  @ApiProperty()
  courier: Courier;
  user: string;
  @ApiProperty()
  phone: string;
  @ApiProperty()
  vehicle: DriverListResponseVehicle;
  @ApiProperty()
  status: DriverListResponseStatus;
  @ApiProperty()
  statistics: DriverListResponseStatistics;
  @ApiProperty()
  createdBy: string;
  @ApiProperty({
    format: 'date-time',
  })
  createdAt: string;
  @ApiProperty({
    format: 'date-time',
  })
  updatedAt: string;
  @ApiProperty()
  appVersion: string;
  @ApiProperty({
    format: 'date-time',
  })
  birthdate: string;
  @ApiProperty()
  dni: string;
  @ApiProperty()
  gender: DriverListResponseGender;
  @ApiProperty({
    format: 'email',
  })
  email: string;
  @ApiProperty()
  businesses: DriverListResponseBusiness[];
  @ApiProperty()
  stores: DriverListResponseStore[];
}

export class DriverPaginationResponse {
  @ApiProperty({
    type: [DriverListResponse],
  })
  data: DriverListResponse[];
  @ApiProperty()
  pagination: Pagination;
}

export class DriverUpdateBody {
  @ApiProperty()
  name: string;
  @ApiProperty()
  lastName: string;
  @ApiProperty()
  birthdate: string;
  @ApiProperty()
  dni: string;
  @ApiProperty()
  gender: string;
  @ApiProperty()
  phone: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  courier: string;
  @ApiProperty()
  store: string;
  @ApiProperty()
  business: string;
  @ApiProperty()
  vehicle: string;
}

export class DriverUpdateBodyResponse extends DriverUpdateBody {
  @ApiProperty()
  id: string;
}

export class DriverUpdaStatusBody {
  @ApiProperty()
  status: boolean;
  @ApiProperty()
  message: string;
  @ApiProperty()
  vehicle: boolean;
}

export class DriverUpdaStatusResponse {
  @ApiProperty()
  success: boolean;
}
