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
  measured_at: string;
  soil_sample: number;
}

export interface IGasAreaSample {
  id: number;
  gasValue: number;
  measured_at: string;
  gasArea_sample: number;
}
