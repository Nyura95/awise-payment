export class ExampleModel {
  public id: number;
  public name: string;

  constructor(raw) {
    this.id = raw.id;
    this.name = raw.name;
  }
}
