import { QueryFunctionContext } from '@tanstack/react-query';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1/',
});

export const getAllSmallFarm = () => instance.get(`smallFarm/SmallFarm`).then((response) => response.data);
export const getAllSoilSample = () => instance.get(`smallFarm/SoilSample`).then((response) => response.data);
export const getSoilSampleDetails = ({ queryKey }: QueryFunctionContext) => {
  const [_, soilSamplePK] = queryKey;
  return instance.get(`smallFarm/SoilSample/${soilSamplePK}`).then((response) => response.data);
};
