import { ModelBase } from "./base.model";

export class AddressModel extends ModelBase {
  public address: string;
  public building: string;
  public floor: string;
  public apartment: string;
  public name: string;
  public latitude: string;
  public longitude: string;

  constructor(id: number) {
    super(id);
  }
}
