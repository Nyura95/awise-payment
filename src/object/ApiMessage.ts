import { IApiMessage } from '../interfaces';
import * as md5 from 'md5';

export class ApiMessage implements IApiMessage {
  constructor(
    public success: boolean,
    public reason: number,
    public comment: string,
    public data: any,
    public dataHash: string,
    public serverTime: Date
  ) {
    this.dataHash = md5(JSON.stringify(this.data));
  }

  public GetString(): string {
    return JSON.stringify(this);
  }
}
