import { UserI } from "./user-i";

export interface UserLoginI {
  token?: string,
  userData: UserI
}
