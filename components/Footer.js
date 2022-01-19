import { Box, Text, Link } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box mt={250} mb={10} textAlign='center'>
      <Text>
        Built and designed by{" "}
        {
          <Link href='https://www.henryho.dev/' isExternal>
            Henry Ho
          </Link>
        }
        , 2022
      </Text>
      <Text>
        Built with{" "}
        {
          <Link href='https://nextjs.org/' isExternal>
            Next
          </Link>
        }{" "}
        &{" "}
        {
          <Link href='https://chakra-ui.com/' isExternal>
            Chakra
          </Link>
        }
        .
      </Text>
      <Text>
        Data provided by{" "}
        {
          <Link href='https://api.nasa.gov/' isExternal>
            NASA APOD Open API
          </Link>
        }
      </Text>
      <Text>
        <Link href='https://vercel.com' isExternal display='inline-block'>
          Powered by{" "}
          <span role='img' aria-label='Vercel logo'>
            ▲
          </span>{" "}
          Vercel.
        </Link>
      </Text>
    </Box>
  );
};

export default Footer;
