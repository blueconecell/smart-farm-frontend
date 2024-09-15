import { Box, Container, HStack, SkeletonText, Text, VStack } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import ISmallFarm, { IGasArea, IGasAreaSample, ISoilSample } from '../../types';
import { getAllGasAreaSample, getGasAreaSampleDetails } from '../../api';
import { useParams } from 'react-router-dom';
import { logoColor } from '../../lib/color';
import { formatDate } from '../../utils/dateUtils';

export default function GasCapture() {
  const { gasAreaSamplePK } = useParams();
  const { data: gasAreaSampleData, isLoading: isgasAreaSampleLoading } = useQuery<IGasAreaSample[]>({
    queryKey: ['gasAreaSample', gasAreaSamplePK],
    queryFn: getGasAreaSampleDetails,
  });
  const { data: getAllGasAreaSampleData, isLoading: isgetAllGasAreaSampleLoading } = useQuery<IGasArea[]>({
    queryKey: ['가스샘플 이름'],
    queryFn: getAllGasAreaSample,
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
  // Tooltip formatter function
  const tooltipFormatter = (value: number) => {
    return [`${value} mg/L`, 'Gas Value'];
  };
  return (
    <VStack minH={'1200px'}>
      {getAllGasAreaSampleData?.map((gasArea) => (
        <>
          {Number(gasArea.id) === Number(gasAreaSamplePK) ? (
            <Box
              padding={5}
              display={'flex'}
              flexDir="column"
              rounded={'10px'}
              w={400}
              border={'2px solid'}
              justifyContent={'center'}
              alignItems={'center'}
              borderColor={logoColor[3]}
              backgroundColor={logoColor[0]}
              color={logoColor[3]}
              fontWeight={'600'}
              fontSize={'25px'}
            >
              <Text p={2}>{gasArea.name}</Text>

              <Text fontWeight={'400'} fontSize={'20px'} p={2}>
                생성일 : {formatDate(gasArea.created_at)}
              </Text>
              <Text p={2}>{gasArea.location}</Text>
            </Box>
          ) : null}
        </>
      ))}

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
