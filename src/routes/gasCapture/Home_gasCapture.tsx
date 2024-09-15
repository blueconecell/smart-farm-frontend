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
import { logoColor } from '../../lib/color';
import { getLatestGasValue } from '../../api';
import { ILatestGasValue } from '../../types';
import { useQuery } from '@tanstack/react-query';
import { VscGraphLine } from 'react-icons/vsc';
import { formatDate } from '../../utils/dateUtils';
export default function Home_gasCapture() {
  const { data: allLatestGasValue, isLoading: isallLatestGasValueLoading } = useQuery<ILatestGasValue[]>({
    queryKey: ['LatestGasValue'],
    queryFn: getLatestGasValue,
  });
  console.log('allLatestGasValue', allLatestGasValue);
  let processesdGasValues: ILatestGasValue[] = [];
  if (allLatestGasValue) {
    processesdGasValues = allLatestGasValue.sort((a, b) => a.gasArea_sample_pk - b.gasArea_sample_pk);
  }

  return (
    <VStack minH={'1200px'}>
      <Box>
        <Box display={'flex'} justifyContent={'center'}>
          <Text fontSize={'30px'} as={'b'} color={logoColor[3]}>
            Gas
          </Text>
        </Box>
        {!allLatestGasValue ? (
          <HStack>
            <Skeleton rounded={'10px'} w={'70px'} height="40px">
              <div>content1</div>
              <div>content2</div>
              <div>content1</div>
              <div>content1</div>
            </Skeleton>
          </HStack>
        ) : (
          <Box display={'flex'} padding={'10px'} gap={'10px'} flexWrap="wrap">
            {processesdGasValues.map((gasArea) => (
              <Link to={`/gas/${gasArea.gasArea_sample_pk}`}>
                <Box
                  padding={5}
                  display={'flex'}
                  flexDir="column"
                  rounded={'10px'}
                  w={230}
                  border={'2px solid'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  borderColor={logoColor[3]}
                  backgroundColor={logoColor[0]}
                  color={logoColor[3]}
                  _hover={{ bg: logoColor[3], color: logoColor[0] }}
                  fontWeight={'600'}
                  fontSize={'25px'}
                >
                  <Text p={2}>{gasArea.gasArea_sample_name}</Text>
                  <HStack>
                    <VscGraphLine />
                    <Text fontWeight={'400'} fontSize={'20px'}>
                      {gasArea.gasValue}
                    </Text>
                  </HStack>
                  <Text fontWeight={'400'} fontSize={'20px'}>
                    {formatDate(gasArea.measured_at)}
                  </Text>
                </Box>
              </Link>
            ))}
          </Box>
        )}
      </Box>
    </VStack>
  );
}
