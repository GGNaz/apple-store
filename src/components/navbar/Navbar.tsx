import { Container,Button } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../../assets/logo.png"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
export default function Navbar() {
  return (
    <Container style={{color: "white", display: "flex", padding:5 , justifyContent: "space-between", boxShadow: "20px"}}>
      <div style={{gap:15, display: "flex", alignItems: "center"}}>
      <NavLink to="/"><img src={logo} alt="logo" style={{height: "2em", width: "2em"}} /> </NavLink>
       <NavLink to="/items" style={{textDecoration: "none", color: "#161617"}}>Mac</NavLink>
       <NavLink to="/items" style={{textDecoration: "none", color: "#161617"}}>Ipad</NavLink>
       <NavLink to="/items" style={{textDecoration: "none", color: "#161617"}}>Iphone</NavLink>
       <NavLink to="/items" style={{textDecoration: "none", color: "#161617"}}>Airpods</NavLink>
       </div>
       <Button style={{color: "#161617"}}><ShoppingCartOutlinedIcon/></Button>
    </Container>

  )
}
