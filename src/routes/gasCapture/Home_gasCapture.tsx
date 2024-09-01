import {
  Box,
  Button,
  Container,
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import ISmallFarm from '../../types';
import { getAllSmallFarm } from '../../api';
import { Link } from 'react-router-dom';
import { logoColor } from '../../lib/color';

export default function Home_gasCapture() {
  return (
    <VStack minH={'1200px'}>
      <Box>
        <Box display={'flex'} justifyContent={'center'}>
          <Text fontSize={'30px'} as={'b'} color={logoColor[3]}>
            Gas
          </Text>
        </Box>
        <HStack padding={'10px'}>
          <Box
            padding={5}
            display={'flex'}
            rounded={'10px'}
            w={'70px'}
            border={'2px solid'}
            justifyContent={'center'}
            alignItems={'center'}
            borderColor={logoColor[3]}
            backgroundColor={logoColor[0]}
            color={logoColor[3]}
            _hover={{ bg: logoColor[3], color: logoColor[0] }}
          >
            <Link to={'/gas/1'}>
              <Text fontWeight={'600'} fontSize={'30px'}>
                1
              </Text>
            </Link>
          </Box>
          <Box
            padding={5}
            display={'flex'}
            rounded={'10px'}
            w={'70px'}
            border={'2px solid'}
            justifyContent={'center'}
            alignItems={'center'}
            borderColor={logoColor[3]}
            backgroundColor={logoColor[0]}
            color={logoColor[3]}
            _hover={{ bg: logoColor[3], color: logoColor[0] }}
          >
            <Link to={'/gas/2'}>
              <Text fontWeight={'600'} fontSize={'30px'}>
                2
              </Text>
            </Link>
          </Box>
          <Box
            padding={5}
            display={'flex'}
            rounded={'10px'}
            w={'70px'}
            border={'2px solid'}
            justifyContent={'center'}
            alignItems={'center'}
            borderColor={logoColor[3]}
            backgroundColor={logoColor[0]}
            color={logoColor[3]}
            _hover={{ bg: logoColor[3], color: logoColor[0] }}
          >
            <Link to={'/gas/3'}>
              <Text fontWeight={'600'} fontSize={'30px'}>
                3
              </Text>
            </Link>
          </Box>
          <Box
            padding={5}
            display={'flex'}
            rounded={'10px'}
            w={'70px'}
            border={'2px solid'}
            justifyContent={'center'}
            alignItems={'center'}
            borderColor={logoColor[3]}
            backgroundColor={logoColor[0]}
            color={logoColor[3]}
            _hover={{ bg: logoColor[3], color: logoColor[0] }}
          >
            <Link to={'/gas/4'}>
              <Text fontWeight={'600'} fontSize={'30px'}>
                4
              </Text>
            </Link>
          </Box>
        </HStack>
      </Box>
    </VStack>
  );
}
