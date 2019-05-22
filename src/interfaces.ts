import { TblLogPaymentModel } from './models/TblLogPaymentModel';

export interface ILogger {
  name: string;
  version: string;
  level: string;

  info: any;
  error: any;
  warn: any;
  debug: any;

  InitLogger(name: string);
}

export interface IServiceContainer {
  Start();
}

export interface IWorker {
  Init();
}

export interface IExpressServer {
  StartServer();
}

export interface IApiMessage {
  success: boolean;
  reason: number;
  comment: string;
  data: any;
  dataHash: string;
  serverTime: Date;
}

export interface IZone<G> {
  id: number;
  serviceID: number;
  geopoints: G;
  name: string;
  type: 1 | 2;
}

export interface ILoopersFront {
  properties: {
    [key: string]: any;
    type: 'cars';
  };
  data: [number, number];
}

export interface IZoneFront {
  properties: {
    name: string;
    color: string;
    [key: string]: any;
  };
  data: number[][];
}

export interface ILineFront {
  properties: {
    color: string;
    [key: string]: any;
  };
  data: number[][];
}

export interface IAccountFront {
  id: number;
  idV3: number;
  firstName: string;
  lastName: string;
  email: string;
  typeAccount: number;
  actif: number;
  serviceId: number;
  profilAccount: number;
  deviceId: number;
  stateReservation: string;
  stateSession: number;
  inRound: number;
  idRound: number;
  lastPosLng: number;
  lastPosLat: number;
}

export interface IServiceFront {
  id: number;
  name: string;
  lat: number;
  lng: number;
  zoom: number;
  nbMarkers: number;
  nbZones: number;
}

export interface IBrokerConnection {
  InitBroker();
  On(name, callback);
  Trigger(name, payload, res);
  ConsumeExchange(exchangeName, defaultOptions, type, queueName, queueRouting, queueOptions);
  ConsumeQueue(queueName, binding, routing, defaultOptions);
  RemoteCall(destination, routingKey, name, payload, timeout);
}

export interface IGoogleApiProvider {
  GetUserInfo(token: string): Promise<any>;
}

export interface IRedisHandler {
  Init(): Promise<string | undefined>;
}

export interface IMySQLHandler {
  Init();
  Example(): Promise<TblLogPaymentModel[] | null>;
}

export interface IMsSQLHandler {
  Init();
  Example(id: number): Promise<TblLogPaymentModel[] | null>;
}
