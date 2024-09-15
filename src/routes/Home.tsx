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
import { Link } from 'react-router-dom';
import { logoColor } from '../lib/color';

export default function Home() {
  return (
    <VStack minH={'1200px'}>
      <Box>
        <Box display={'flex'} justifyContent={'center'}>
          <Text fontSize={'30px'} as={'b'} color={logoColor[3]}></Text>
        </Box>
        <HStack padding={'10px'}>
          <Box
            padding={5}
            display={'flex'}
            rounded={'10px'}
            minW={'70px'}
            border={'2px solid'}
            justifyContent={'center'}
            alignItems={'center'}
            borderColor={logoColor[3]}
            backgroundColor={logoColor[0]}
            color={logoColor[3]}
            _hover={{ bg: logoColor[3], color: logoColor[0] }}
          >
            <Link to={'/study'}>
              <Text fontWeight={'600'} fontSize={'20px'}>
                토양 수분도 학습 모듈
              </Text>
            </Link>
          </Box>
          <Box
            padding={5}
            display={'flex'}
            rounded={'10px'}
            minW={'70px'}
            border={'2px solid'}
            justifyContent={'center'}
            alignItems={'center'}
            borderColor={logoColor[3]}
            backgroundColor={logoColor[0]}
            color={logoColor[3]}
            _hover={{ bg: logoColor[3], color: logoColor[0] }}
          >
            <Link to={'/gas'}>
              <Text fontWeight={'600'} fontSize={'20px'}>
                DIY 온실 가스 자동 분석기
              </Text>
            </Link>
          </Box>
        </HStack>
      </Box>
    </VStack>
  );
}
