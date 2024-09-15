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

export interface ILatestGasValue {
  gasArea_sample_pk: number;
  gasArea_sample_name: string;
  gasValue: number;
  measured_at: string;
}
export interface IGasArea {
  id: number;
  name: string;
  location: string | null;
  created_at: string;
  team_pk: number;
}
