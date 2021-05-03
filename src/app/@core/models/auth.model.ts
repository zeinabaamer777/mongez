import { ValidAddresses } from "./validAddresses.model";

export class AuthModel {
  id: number;
  jwt: string;
  email: string;
  name: string;
  username: string;
  phone: number;
  isNew: boolean;
  password: string;
  validAddresses: ValidAddresses
}
