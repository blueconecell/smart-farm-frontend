import { Box, Container, HStack, SkeletonText, Text, VStack } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import ISmallFarm, { ISoilSample } from '../types';
import { getAllSmallFarm, getSoilSampleDetails } from '../api';
import { useParams } from 'react-router-dom';
import { logoColor } from '../lib/color';

export default function Study() {
  const { soilSamplePK } = useParams();
  const { data: soilSampleData, isLoading: isSoilSampleDataLoading } = useQuery<ISoilSample[]>({
    queryKey: ['soilSample', soilSamplePK],
    queryFn: getSoilSampleDetails,
  });
  return (
    <VStack minH={'1200px'}>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={soilSampleData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="humidValue" stroke={logoColor[3]} activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </VStack>
  );
}
