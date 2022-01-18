import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "../styles/theme.js";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
