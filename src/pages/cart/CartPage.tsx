import {
  Box,
  Container,
  Typography,
  Card,
  Button,
  Checkbox,
} from "@mui/material";
import { cartStore } from "../../zustand/cartStore";
import { shallow } from "zustand/shallow";
import { CartProps, MyCartProps } from "../landingpage/ts/landingmodule";
import { useEffect, useState } from "react";
import { CheckedItemProps } from "./ts/cart";



function CartPage() {
  const { mycart, removeCart } = cartStore((state) => state, shallow);
  console.log("🚀 ~ file: CartPage.tsx:7 ~ CartPage ~ mycart:", mycart);
  const [selected, setSelected] = useState<CheckedItemProps[]  >([]);
  const [cart, setCart] = useState<CheckedItemProps[] >([]);
  console.log("🚀 ~ file: CartPage.tsx:22 ~ CartPage ~ cart:", cart)
  const [checkedItems, setCheckedItems] = useState<CheckedItemProps[] >([]);
  const [total, setTotal] = useState<number>(0);
  
  useEffect(() => {
    const restructMyCart = () => {  
      let cartList:CheckedItemProps[] = []
      if(mycart.length>0){
        mycart?.map((data) => {
          const params = {
            ...data,
            isChecked: false
          }
          cartList.push(params)

        })
        setCart(cartList)
      }

    }
    restructMyCart()
  },[])

  console.log("🚀 ~ file: CartPage.tsx:17 ~ CartPage ~ selected:", selected);
  function calculateTotal(checked: boolean, data: CheckedItemProps) {
    console.log("🚀 ~ file: CartPage.tsx:47 ~ calculateTotal ~ data:", data)
    const copySelected: CheckedItemProps[] = [...selected];
    
    if (checked) {
      copySelected.push(data);
      setSelected(copySelected);
    } else {
      const findItem = selected.findIndex(({ _id }) => _id === data._id);
      copySelected.splice(findItem, 1);
      setSelected(copySelected);
    }
    const copyCart: CheckedItemProps[] = [...cart];

    const cartIndex = cart?.findIndex(({ _id, color }) => _id === data._id&&color === data.color);
    console.log("🚀 ~ file: CartPage.tsx:59 ~ calculateTotal ~ cartIndex:", cartIndex)
    const newParams = {
      ...data,
      isChecked: checked
    }
    copyCart[cartIndex] = newParams
    console.log("🚀 ~ file: CartPage.tsx:58 ~ calculateTotal ~ copyCart:", copyCart)
    return setCart(copyCart)
    // console.log(
    //   "🚀 ~ file: CartPage.tsx:19 ~ calculateTotal ~ copySelected:",
    //   copySelected
    // );

    // console.log("calculateTotal", data);
  }

  function checkOut() {
    const copyCart: CheckedItemProps[] = [...cart];

   
    if (selected?.length > 0) {
      alert("Checkout success!");
      selected?.map(({ _id, color }) => { 
        const cartIndex = cart?.findIndex((data) => data._id === _id&&data.color === color);
        if(cartIndex>=0){
          copyCart.splice(cartIndex, 1)
        }
      
        removeCart(_id,color)
      });
      setCart(copyCart)
    } else {
      alert("No items selected");
    }
  }

  useEffect(() => {
    const calculate = () => {
      let computedTotal = 0;
      if (selected?.length > 0) {
        selected.forEach(({ price,quantity }) => {
          computedTotal = computedTotal + price*quantity;
          return computedTotal;
        });
        setTotal(computedTotal);
      } else {
        setTotal(0);
      }
    };
    calculate();
  }, [selected]);

  

  // function checkedItemsSelected(_id:number)  {
  // const checkIfExist = selected?.findIndex((data)  => data._id === _id)
  // if(checkIfExist >=0) return true
  // else return false
  // } 

  const cartList = () => {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {cart.length > 0
          ? cart.map((data) => {
              const { picture, name, color, quantity, price, _id,isChecked } = data ?? {};
              return (
                <Card
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: 2,
                  }}
                  key={_id}
                >
                  <Checkbox
                  checked={isChecked}
                  // value={isChecked}
                    onChange={(e) => calculateTotal(e.target.checked, data)}
                  />
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Box
                      sx={{
                        border: "1px solid gray",
                        borderRadius: "10px",
                        width: "20rem",
                        height: "12rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img src={picture} style={{ height: "10rem" }} />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography sx={{ fontSize: "20px" }}>{name}</Typography>
                      <Typography sx={{ fontSize: "12px" }}>
                        Color: {color}
                      </Typography>
                      <Typography sx={{ fontSize: "12px" }}>
                        x{quantity}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography>₱{price?.toLocaleString()}</Typography>
                    <Button onClick={() => removeCart(_id, color)}>Delete</Button>
                  </Box>
                </Card>
              );
            })
          : "Empty cart"}
        <Box
          style={{
            display: "flex",
            justifyContent: "end",
            fontWeight: 500,
            fontSize: "2rem",
          }}
        >
          Total: ₱{total?.toLocaleString()}
        </Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "end",
            fontWeight: 500,
            fontSize: "2rem",
          }}
        >
          <Button
            sx={{ textTransform: "none" }}
            variant="contained"
            onClick={() => checkOut()}
          >
            Check out
          </Button>
        </Box>
      </Box>
    );
  };
  return (
    <Container sx={{ paddingY: "5rem" }}>
      <Typography>My Cart</Typography>
      {cartList()}
    </Container>
  );
}

export default CartPage;
