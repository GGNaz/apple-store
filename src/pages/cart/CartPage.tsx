import { Box, Container, Typography,Card, Button } from "@mui/material";
import { cartStore } from "../../zustand/cartStore";
import { shallow } from "zustand/shallow";
import { CartProps } from "../landingpage/ts/landingmodule";
function CartPage() {
  const { mycart, removeCart } = cartStore((state) => state, shallow)
  console.log("🚀 ~ file: CartPage.tsx:7 ~ CartPage ~ mycart:", mycart)
  function calculateTotalPerItem (){

  }
  const cartList = () => {
    return (
      <Box sx={{display: "flex", flexDirection: "column", gap:2}}>
        {
          mycart.length > 0 ? 
          mycart.map((data) => {
            const { picture, name, color,quantity, price,_id } = data ?? {}
            return (
              <Card sx={{display: "flex", justifyContent: "space-between", padding: 2}}>
                <Box sx={{display: "flex", gap: 2}}>

           
                <Box sx={{border: "1px solid gray", borderRadius: "10px", width: "20rem", height: "12rem", display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <img src={picture} style={{height:"10rem"}} />
                </Box>
                <Box sx={{display: "flex", flexDirection: "column"}}>
                  <Typography sx={{fontSize: "20px"}}>{name}</Typography>
                  <Typography sx={{fontSize: "12px"}}>Color: {color}</Typography>
                  <Typography sx={{fontSize: "12px"}}>x{quantity}</Typography>
                </Box>
                </Box>
                <Box sx={{display: "flex", flexDirection: "column"}}>
                  <Typography>₱{price}</Typography>
                  <Button onClick={() => removeCart(_id)}>Delete</Button>
                </Box>
            </Card>
            )
          })
          : "Empty cart"
        }
         
      </Box>
    )
  }
  return  <Container sx={{ paddingY: "5rem" }}>

  <Typography>My Cart</Typography>
  {cartList()}
  
</Container>
}

export default CartPage;
