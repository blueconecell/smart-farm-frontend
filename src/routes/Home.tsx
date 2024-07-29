import { Box, Container, HStack, SkeletonText, Text, VStack } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import ISmallFarm from '../type';
import { getAllSmallFarm } from '../api';

export default function Set12Home() {
  const { data: allSmallFarm, isLoading: isAllSmallFarmLoading } = useQuery<ISmallFarm[]>({
    queryKey: ['allSmallFarm'],
    queryFn: getAllSmallFarm,
  });
  console.log(allSmallFarm);
  return (
    <VStack minH={'1200px'}>
      <VStack border={'2px'} borderRadius={'15px'} p={'10px'}>
        {!allSmallFarm ? (
          <SkeletonText></SkeletonText>
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
    </VStack>
  );
}
