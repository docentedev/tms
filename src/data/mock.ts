import { VehicleListResponse } from 'src/types';

export const vehicleListResponseData: VehicleListResponse = {
  id: 'string',
  licencePlate: 'string',
  vehicleType: {
    id: 'string',
    name: 'TRUCK',
  },
  propulsionType: {
    id: 'string',
    name: 'GAS',
  },
  status: {
    id: 'string',
    name: 'string',
  },
  statistics: {
    hoursOnRoad: 0,
    kilometersTraveled: 0,
    dispatchedPackages: 0,
  },
  driver: {
    name: 'string',
    lastName: 'string',
    fullName: 'string',
    courier: {
      id: 'string',
      name: 'string',
    },
    user: 'string',
  },
  brand: 'string',
  createdBy: 'string',
  createdAt: new Date(),
  updatedAt: new Date(),
};
