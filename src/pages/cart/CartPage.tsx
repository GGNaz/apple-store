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

type isCheckProps = {
  isChecked: boolean;
};

function CartPage() {
  const { mycart, removeCart } = cartStore((state) => state, shallow);
  console.log("🚀 ~ file: CartPage.tsx:7 ~ CartPage ~ mycart:", mycart);
  const [selected, setSelected] = useState<MyCartProps[]>([]);
  const [total, setTotal] = useState<number>(0);
  console.log("🚀 ~ file: CartPage.tsx:17 ~ CartPage ~ selected:", selected);
  function calculateTotal(checked: boolean, data: MyCartProps) {
    const copySelected: MyCartProps[] = [...selected];
    if (checked) {
      copySelected.push(data);
      setSelected(copySelected);
    } else {
      const findItem = selected.findIndex(({ _id }) => _id === data._id);
      copySelected.splice(findItem, 1);
      setSelected(copySelected);
    }
    // console.log(
    //   "🚀 ~ file: CartPage.tsx:19 ~ calculateTotal ~ copySelected:",
    //   copySelected
    // );

    // console.log("calculateTotal", data);
  }

  function checkOut() {
    if (selected?.length > 0) {
      alert("Checkout success!");
      selected?.map(({ _id }) => removeCart(_id));
    } else {
      alert("No items selected");
    }
  }

  useEffect(() => {
    const calculate = () => {
      let computedTotal = 0;
      if (selected?.length > 0) {
        selected.map(({ price }) => {
          computedTotal = computedTotal + price;
          return computedTotal;
        });
        setTotal(computedTotal);
      } else {
        setTotal(0);
      }
    };
    calculate();
  }, [selected]);

  const cartList = () => {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {mycart.length > 0
          ? mycart.map((data) => {
              const { picture, name, color, quantity, price, _id } = data ?? {};
              return (
                <Card
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: 2,
                  }}
                >
                  <Checkbox
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
                    <Typography>₱{price}</Typography>
                    <Button onClick={() => removeCart(_id)}>Delete</Button>
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
          Total: {total}
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
