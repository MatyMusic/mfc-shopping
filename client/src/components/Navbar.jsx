import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Icon,
  Text,
  useDisclosure,
  Button,
  Stack,
  useColorModeValue,
  useColorMode,
  useToast,
  MenuButton,
  MenuDivider,
  Menu,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import {
  HamburgerIcon,
  CloseIcon,
  MoonIcon,
  SunIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import { CgProfile } from "react-icons/cg";
import {
  MdLocalShipping,
  MdLogout,
  MdOutlineAdminPanelSettings,
} from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { GiTechnoHeart } from "react-icons/gi";
import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../redux/actions/userActions";

const links = [
  { linkName: "מוצרים", path: "/products" },
  { linkName: "עגלת קניות", path: "/cart" },
];

const NavLink = ({ path, children }) => (
  <Link
    as={ReactLink}
    to={path}
    px={2}
    py={2}
    rounded="md"
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
  >
    {children}
  </Link>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack>
          <Link as={ReactLink} to="/">
            <Flex alignItems="center">
              <Icon as={GiTechnoHeart} h={6} w={6} color="orange.400" />
              <Text fontWeight="extrabold">mfc shopping</Text>
            </Flex>
          </Link>

          <HStack  as='nav' spacing={4} display={{base: 'none', md: 'flex'}}  >
            {links.map((link) => (
              <NavLink key={link.linkName} path={link.path}>
                {link.linkName}
              </NavLink>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems="center">
          <NavLink>
            <Icon
              as={colorMode === "light" ? MoonIcon : SunIcon}
              alignSelf="center"
              onClick={() => toggleColorMode()}
            />
          </NavLink>
          <Button
            as={ReactLink}
            to="/login"
            p={2}
            fontSize="sm"
            fontWeight={400}
            variant="link"
          >
            כניסה
          </Button>
          <Button
            as={ReactLink}
            to="/registration"
            m={2}
            display={{base: 'none' , md: 'inline-flex'}}
            fontSize="sm"
            fontWeight={600}
            _hover={{ bg: "orange.400" }}
            bg="orange.500"
            color="white"
          >
            הירשם
          </Button>
        </Flex>
      </Flex>

      {isOpen ? <Box pb={4} display={{ md: "none" }}>
            <Stack as='nav' spacing={4}  >
            {links.map((link) => (
              <NavLink key={link.linkName} path={link.path}>
                {link.linkName}
              </NavLink>
            ))}
            <NavLink key='sign up' path='/registration'>
              הירשם
            </NavLink>
            </Stack>
      </Box> : null}
    </Box>
  );
};

export default Navbar;
