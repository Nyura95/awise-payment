export class TblTokenPayment {
  public id: number;
  public token: string;
  public statut: number;
  public lifetime_max: Date;
  public action_nb: number;
  public action_max: number;
  public user_id: number;
  public updated_at: Date;
  public created_at: Date;

  constructor(raw: TblTokenPayment) {
    this.id = raw.id;
    this.token = raw.token;
    this.statut = raw.statut;
    this.lifetime_max = raw.lifetime_max;
    this.action_nb = raw.action_nb;
    this.action_max = raw.action_max;
    this.user_id = raw.user_id;
    this.updated_at = raw.updated_at;
    this.created_at = raw.created_at;
  }
}
