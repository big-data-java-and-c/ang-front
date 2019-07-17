import {Groups} from './Groups';
import {User} from './user';
import {Grade} from './Grade';

export class Students {
  id: number;
  displayName: string;
  address: string;
  city: string;
  province: string;
  zip_code: string;
  phone_number: string;

  group: Groups;
  user: User;
  grade: Grade;

}
