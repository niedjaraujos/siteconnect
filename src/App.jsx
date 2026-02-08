import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./globalStyles.scss";

import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { AppRoutes } from "./routes/AppRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
