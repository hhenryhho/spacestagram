import { IconButton } from "@chakra-ui/button";
import { Image, useColorMode } from "@chakra-ui/react";
import { Heading, Flex } from "@chakra-ui/layout";
import { WiMoonAltFirstQuarter } from "react-icons/wi";
import { CloseIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      backdropFilter='blur(8px)'
      pos='fixed'
      w='100vw'
      py={3}
      justify='space-between'
    >
      <Flex pl={[50, 100]} align='center'>
        <Image
          borderRadius='full'
          objectFit='cover'
          boxSize={["60px", "75px"]}
          src='nasa.png'
        />
        <CloseIcon />
        <Image
          borderRadius='full'
          objectFit='cover'
          boxSize={["60px", "75px"]}
          src='shopify.png'
        />
      </Flex>
      <Flex pr={[50, 100]} align='center'>
        <IconButton
          w={["50px", "50px"]}
          h={["50px", "50px"]}
          onClick={toggleColorMode}
          icon={<WiMoonAltFirstQuarter />}
        >
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </IconButton>
      </Flex>
    </Flex>
  );
};

export default Navbar;
