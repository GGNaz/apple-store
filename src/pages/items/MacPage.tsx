import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import { macList } from "../../json/macList";

import { MacbookProps } from "./ts/macbook";
import { cartStore } from "../../zustand/cartStore";
import { shallow } from "zustand/shallow";

function MacPage() {
  console.log("🚀 ~ file: MacPage.tsx:3 ~ macList:", macList);
  const { storeCartList, mycart } = cartStore((state) => state, shallow);
  const renderMacList = () => {
    return (
      <Grid container spacing={2}>
        {macList.length > 0 &&
          macList.map((data: MacbookProps) => {
            const {
              _id,
              name,
              price,
              color,
           
              picture,
            
            } = data ?? {};
            return (
              <Grid item md={6} key={_id}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    p: 5,
                    gap: 2,
                  }}
                  onClick={() => storeCartList({...data, color: color[0]})}
                >
                  <img
                    src={picture}
                    style={{ height: "40vh" }}
                    alt="MackBookAir"
                    loading="lazy"
                  />
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography fontSize={20} sx={{ fontWeight: 500 }}>
                      {name}
                    </Typography>
                    <Typography fontSize={20}>
                      ₱{price.toLocaleString()}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",

                      width: "100%",
                    }}
                    gap={2}
                  >
                    <Button
                      sx={{ textTransform: "none", width: "100%" }}
                      variant="contained"
                    >
                      Buy now
                    </Button>
                    <Button
                      sx={{ textTransform: "none", width: "100%" }}
                      variant="outlined"
                    >
                      Add to Cart
                    </Button>
                  </Box>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    );
  };
  return (
    <Container sx={{ paddingY: "5rem" }}>
      <Box>Filter here</Box>
      {renderMacList()}
    </Container>
  );
}

export default MacPage;
