import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Layout from "./layout";

// routes
import Routes from "./routes";

function App() {
  return (
    <Layout>
      <Routes />
    </Layout>
  );
}

export default App;
