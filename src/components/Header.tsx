import {
  HStack,
  Box,
  Text,
  Image,
  Container,
  VStack,
  Input,
  FormControl,
  Button,
  Grid,
  Tooltip,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  return (
    <Box mb={10} display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <VStack gap={10}>
        <Box mb={5}>
          <Link to={'/'}>
            <Box pt={20} pb={6} opacity={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
              <Text fontSize={'50px'} as={'b'} color={'#1A5319'}>
                스마트 팜
              </Text>
            </Box>
          </Link>
        </Box>

        <Grid
          templateColumns={{
            lg: 'repeat(5, 2fr)',
            md: 'repeat(4, 2fr)',
            sm: 'repeat(3, 2fr)',
          }}
          gap={5}
        >
          <Box
            _hover={{ bg: '#1A5319', textColor: 'white' }}
            rounded={'5px'}
            paddingX={5}
            paddingY={3}
            fontSize={'14px'}
            border={'2px solid #1A5319'}
            w={'130px'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Link to={'/post'}>
              <Text fontWeight={'600'}>Post 요청</Text>
            </Link>
          </Box>
          <Box
            _hover={{ bg: '#1A5319', textColor: 'white' }}
            rounded={'5px'}
            paddingX={5}
            paddingY={3}
            fontSize={'14px'}
            border={'2px solid #1A5319'}
            w={'130px'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Link to={'/'}>
              <Text fontWeight={'600'}>임시</Text>
            </Link>
          </Box>
          <Box
            _hover={{ bg: '#1A5319', textColor: 'white' }}
            rounded={'5px'}
            paddingX={5}
            paddingY={3}
            fontSize={'14px'}
            border={'2px solid #1A5319'}
            w={'130px'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Link to={'/'}>
              <Text fontWeight={'600'}>임시</Text>
            </Link>
          </Box>
          <Box
            _hover={{ bg: '#1A5319', textColor: 'white' }}
            rounded={'5px'}
            paddingX={5}
            paddingY={3}
            fontSize={'14px'}
            border={'2px solid #1A5319'}
            w={'130px'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Link to={'/'}>
              <Text fontWeight={'600'}>임시</Text>
            </Link>
          </Box>
          <Box
            _hover={{ bg: '#1A5319', textColor: 'white' }}
            rounded={'5px'}
            paddingX={5}
            paddingY={3}
            fontSize={'14px'}
            border={'2px solid #1A5319'}
            w={'130px'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Link to={'/'}>
              <Text fontWeight={'600'}>임시</Text>
            </Link>
          </Box>
          <Box
            _hover={{ bg: '#1A5319', textColor: 'white' }}
            rounded={'5px'}
            paddingX={5}
            paddingY={3}
            fontSize={'14px'}
            border={'2px solid #1A5319'}
            w={'130px'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Link to={'/'}>
              <Text fontWeight={'600'}>임시</Text>
            </Link>
          </Box>
        </Grid>
      </VStack>
    </Box>
  );
}
