import React from "react";
import { AppProvider } from "./context/productscontext.jsx";
import Index from "./routes/index.jsx";

const App = () => {
  return (
    <AppProvider>
      <Index />
    </AppProvider>
  );
};

export default App;
