import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Box } from '@chakra-ui/react';

import { Navbar } from './component';

// routes
import Routes from './routes';

function App() {
  return (
    <>
      <Navbar />
      <Box mx={{ base: 0, md: 60 }} mt={10} p="4">
        <Routes />
      </Box>
    </>
  );
}

export default App;
