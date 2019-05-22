export class LblActionPayment {
  public id: number;
  public locKey: string;
  public label: string;
  public updated_at: Date;
  public created_at: Date;

  constructor(raw: LblActionPayment) {
    this.id = raw.id;
    this.locKey = raw.locKey;
    this.label = raw.label;
    this.updated_at = raw.updated_at;
    this.created_at = raw.created_at;
  }
}
