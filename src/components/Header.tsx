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
    <Box display={'flex'} justifyContent={'center'} mb={10}>
      <Text fontSize={'40px'} as={'b'}>
        Smart Farm Test
      </Text>
    </Box>
  );
}
