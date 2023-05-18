

import { Routes, Route } from "react-router-dom"

import { Container } from "@mui/material";
import LandingPage from './pages/landingpage/LandingPage';
import ItemsPage from './pages/items/ItemsPage';
import CartPage from './pages/cart/CartPage';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from "./components/navbar/Navbar";

function App() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/items' element={<ItemsPage/>} />
        <Route path='/cart' element={<CartPage/>} >
        </Route>
     
      </Routes>
 
    </ThemeProvider>
  )
}

export default App
