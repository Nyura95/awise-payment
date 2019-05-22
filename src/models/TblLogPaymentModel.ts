export class TblLogPaymentModel {
  public id: number;
  public action_id: number;
  public locKey: string;
  public description: string;
  public updated_at: Date;
  public created_at: Date;

  constructor(raw: TblLogPaymentModel) {
    this.id = raw.id;
    this.action_id = raw.action_id;
    this.locKey = raw.locKey;
    this.description = raw.description;
    this.updated_at = raw.updated_at;
    this.created_at = raw.created_at;
  }
}
