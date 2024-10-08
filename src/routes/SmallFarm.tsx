import { Box, Container, HStack, Skeleton, SkeletonCircle, SkeletonText, Stack, Text, VStack } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import ISmallFarm from '../types';
import { getAllSmallFarm } from '../api';
import { logoColor } from '../lib/color';

export default function SmallFarm() {
  const { data: allSmallFarm, isLoading: isAllSmallFarmLoading } = useQuery<ISmallFarm[]>({
    queryKey: ['allSmallFarm'],
    queryFn: getAllSmallFarm,
  });
  return (
    <VStack minH={'1200px'}>
      {!allSmallFarm ? (
        <Stack w={'50%'}>
          <Skeleton startColor={logoColor[0]} endColor={logoColor[1]} height="100px" />
          <Skeleton startColor={logoColor[0]} endColor={logoColor[1]} height="100px" />
          <Skeleton startColor={logoColor[0]} endColor={logoColor[1]} height="100px" />
        </Stack>
      ) : (
        <>
          {allSmallFarm.map((SF_ele) => (
            <VStack>
              <VStack
                border={'1px'}
                borderRadius={'15px'}
                width={'300px'}
                h={'100px'}
                justifyContent={'center'}
                textAlign={'center'}
                alignItems={'center'}
              >
                <Text>이름 : {SF_ele.name}</Text>
                <Text>토양수분도 : {SF_ele.soil_humid}</Text>
              </VStack>
            </VStack>
          ))}
        </>
      )}
    </VStack>
  );
}
