import { Box, Container, HStack, SkeletonText, Text, VStack } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import ISmallFarm, { IGasAreaSample, ISoilSample } from '../../types';
import { getGasAreaSampleDetails } from '../../api';
import { useParams } from 'react-router-dom';
import { logoColor } from '../../lib/color';

export default function GasCapture() {
  const { gasAreaSamplePK } = useParams();
  console.log('gasAreaSamplePK', gasAreaSamplePK); // 값이 제대로 나오는지 확인
  const { data: gasAreaSampleData, isLoading: isgasAreaSampleLoading } = useQuery<IGasAreaSample[]>({
    queryKey: ['gasAreaSample', gasAreaSamplePK],
    queryFn: getGasAreaSampleDetails,
  });
  const processedData = gasAreaSampleData?.map((item) => ({
    time: new Date(item.measured_at).toLocaleTimeString('en-US', {
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false, // 24시간 형식 사용
    }),
    gasValue: item.gasValue,
  }));
  console.log('processedData', processedData);
  // Tooltip formatter function
  const tooltipFormatter = (value: number) => {
    return [`${value} mg/L`, 'Gas Value'];
  };
  return (
    <VStack minH={'1200px'}>
      <ResponsiveContainer width="80%" height={400}>
        <LineChart
          data={processedData}
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
          <Tooltip formatter={tooltipFormatter} />
          <Legend />
          <Line type="monotone" dataKey="gasValue" stroke="#508D4E" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </VStack>
  );
}
