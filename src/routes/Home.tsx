import { Box, Container, HStack, Skeleton, SkeletonCircle, SkeletonText, Stack, Text, VStack } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import ISmallFarm from '../types';
import { getAllSmallFarm } from '../api';

export default function Home() {
  const { data: allSmallFarm, isLoading: isAllSmallFarmLoading } = useQuery<ISmallFarm[]>({
    queryKey: ['allSmallFarm'],
    queryFn: getAllSmallFarm,
  });
  const logoColor = ['#D6EFD8', '#80AF81', '#508D4E', '#1A5319'];
  console.log(!allSmallFarm);
  return <VStack minH={'1200px'}></VStack>;
}
