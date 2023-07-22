import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";

const root = document.getElementById("root") as HTMLDivElement;

const theme = extendTheme({
  fonts: {
    body: "Roboto, Helvetica, Arial, sans-serif",
    heading: "Roboto, Helvetica, Arial, sans-serif"
  },
  colors:{
    brand:{
      100: "#946070",
      200: '#F2A849',
      300: '#F8F8F7',
      400: '#D66A7D',
      500: '#2A1C30',
    }
  }
  // ...
});

ReactDOM.createRoot(root).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>,
);
