import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingpage/LandingPage";
import MacPage from "./pages/items/MacPage";
import CartPage from "./pages/cart/CartPage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/navbar/Navbar";
import "animate.css";
import IpadPage from "./pages/items/IpadPage";

function App() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mac" element={<MacPage />} />
        <Route path="/ipad" element={<IpadPage />} />
        <Route path="/cart" element={<CartPage />}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
