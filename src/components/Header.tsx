import {
  Box,
  Button,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  LightMode,
  useColorMode,
  useColorModeValue,
  Avatar,
  Skeleton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useToast,
  ToastId,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { FaSeedling } from 'react-icons/fa';
import LoginModal from './LoginModal';
export default function Header() {
  const navigate = useNavigate();
  const logoColor = ['#D6EFD8', '#80AF81', '#508D4E', '#1A5319'];
  const { isOpen: isLoginOpen, onClose: onLoginClose, onOpen: onLoginOpen } = useDisclosure();
  return (
    <Stack
      justifyContent={'space-between'}
      alignItems="center"
      py={5}
      px={40}
      direction={{
        sm: 'column',
        md: 'row',
      }}
      spacing={{
        sm: 4,
        md: 0,
      }}
      borderBottomWidth={1}
    >
      <Box color={logoColor[3]}>
        <Link to={'/'}>
          <FaSeedling size={'48'} />
        </Link>
      </Box>
      <Button
        backgroundColor={logoColor[0]}
        color={logoColor[3]}
        _hover={{ bg: logoColor[3], color: logoColor[0] }}
        onClick={onLoginOpen}
      >
        Log in
      </Button>
      <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
    </Stack>
  );
}
