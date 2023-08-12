import { Box } from "@chakra-ui/react";

import { Navbar } from "../component";
// react-router
import { BrowserRouter as Router } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <Router>
      <Navbar />
      <Box mx={{ base: 0, md: 20 }} mt={10} px="5">
        {children}
      </Box>
    </Router>
  );
};

export default Layout;
