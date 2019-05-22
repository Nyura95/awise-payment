export class TblActionPayment {
  public id: number;
  public token_id: number;
  public statut: number;
  public action_type_id: number;
  public transaction_id: number;
  public table_name: string;
  public version: string;
  public agent_user: string;
  public updated_at: Date;
  public created_at: Date;

  constructor(raw: TblActionPayment) {
    this.id = raw.id;
    this.token_id = raw.token_id;
    this.statut = raw.statut;
    this.action_type_id = raw.action_type_id;
    this.transaction_id = raw.transaction_id;
    this.table_name = raw.table_name;
    this.version = raw.version;
    this.agent_user = raw.agent_user;
    this.updated_at = raw.updated_at;
    this.created_at = raw.created_at;
  }
}
