import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import textStyles from "./components/textStyles";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const components = {
  Text: { ...textStyles },
};

const theme = extendTheme({
  config,
  components,
});

export default theme;