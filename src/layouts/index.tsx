import { FC, ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import Header from "./Header";


const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <Box>{children}</Box>
    </>
  );
};

export default Layout;
