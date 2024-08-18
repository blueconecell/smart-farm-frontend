import { Box, Button, Container, HStack,  Skeleton, SkeletonCircle, SkeletonText, Stack, Text, VStack } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import ISmallFarm from '../types';
import { getAllSmallFarm } from '../api';
import { Link } from 'react-router-dom';

export default function Home() {
  const { data: allSmallFarm, isLoading: isAllSmallFarmLoading } = useQuery<ISmallFarm[]>({
    queryKey: ['allSmallFarm'],
    queryFn: getAllSmallFarm,
  });
  const logoColor = ['#D6EFD8', '#80AF81', '#508D4E', '#1A5319'];
  console.log(!allSmallFarm);
  return <VStack minH={'1200px'}>
    <Box>
      <Text fontSize={"30px"}>soil sample</Text>
      <HStack padding={"10px"}>

      <Box
      padding={5}
      display={"flex"}
      rounded={"10px"}
      w={"70px"}
      border={"2px solid"}
      justifyContent={"center"}
      alignItems={"center"}
      borderColor={logoColor[3]}
      backgroundColor={logoColor[0]}
      color={logoColor[3]}
      _hover={{ bg: logoColor[3], color: logoColor[0] }}
      >
        <Link to={"/study/1"}>
        <Text fontWeight={"600"} fontSize={"30px"}>1</Text></Link>
      </Box>
      <Box
      padding={5}
      display={"flex"}
      rounded={"10px"}
      w={"70px"}
      border={"2px solid"}
      justifyContent={"center"}
      alignItems={"center"}
      borderColor={logoColor[3]}
      backgroundColor={logoColor[0]}
      color={logoColor[3]}
      _hover={{ bg: logoColor[3], color: logoColor[0] }}
      >
        <Link to={"/study/2"}>
        <Text fontWeight={"600"} fontSize={"30px"}>2</Text></Link>
      </Box>
      <Box
      padding={5}
      display={"flex"}
      rounded={"10px"}
      w={"70px"}
      border={"2px solid"}
      justifyContent={"center"}
      alignItems={"center"}
      borderColor={logoColor[3]}
      backgroundColor={logoColor[0]}
      color={logoColor[3]}
      _hover={{ bg: logoColor[3], color: logoColor[0] }}
      >
        <Link to={"/study/3"}>
        <Text fontWeight={"600"} fontSize={"30px"}>3</Text></Link>
      </Box>
      <Box
      padding={5}
      display={"flex"}
      rounded={"10px"}
      w={"70px"}
      border={"2px solid"}
      justifyContent={"center"}
      alignItems={"center"}
      borderColor={logoColor[3]}
      backgroundColor={logoColor[0]}
      color={logoColor[3]}
      _hover={{ bg: logoColor[3], color: logoColor[0] }}
      >
        <Link to={"/study/4"}>
        <Text fontWeight={"600"} fontSize={"30px"}>4</Text></Link>
      </Box>
      </HStack>
    
    </Box>
  </VStack>;
}
