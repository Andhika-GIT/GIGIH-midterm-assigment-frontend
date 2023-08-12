("use client");

import {
  Box,
  Button,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { FiChevronDown } from "react-icons/fi";

import { Link } from "react-router-dom";

const NavLink = (props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Link to="/">
            <Text fontSize="2xl" fontWeight="800">
              TOKOPEDIA-PLAY
            </Text>
          </Link>

          <HStack spacing={{ base: "4", md: "6" }}>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
            <Flex alignItems={"center"}>
              <Menu>
                <MenuButton
                  py={2}
                  transition="all 0.3s"
                  _focus={{ boxShadow: "none" }}
                >
                  <HStack>
                    {/* <Avatar size={'sm'} src="https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9" /> */}
                    <VStack
                      display={{ base: "none", md: "flex" }}
                      alignItems="flex-start"
                      spacing="1px"
                      ml="2"
                    >
                      <Text fontSize="sm">Hubla.exe</Text>
                    </VStack>
                    <Box display={{ base: "none", md: "flex" }}>
                      <FiChevronDown />
                    </Box>
                  </HStack>
                </MenuButton>
                <MenuList
                  bg={useColorModeValue("white", "gray.900")}
                  borderColor={useColorModeValue("gray.200", "gray.700")}
                >
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>Sign out</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </HStack>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
