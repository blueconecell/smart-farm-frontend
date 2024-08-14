export default interface ISmallFarm {
  name: string;
  soil_humid: number;
}

export interface IUser {
  last_login: string;
  username: string;
  email: string;
  date_joined: string;
  avatar: string;
  name: string;
  is_host: boolean;
  gender: string;
  language: string;
  currency: string;
}

export interface ISoilSample {
  id: number;
  humidValue: number;
  measureed_at: string;
  soil_sample: number;
}
