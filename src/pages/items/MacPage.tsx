import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import { macList } from "../../json/macList";

import { MacbookProps } from "./ts/macbook";

function MacPage() {
  console.log("🚀 ~ file: MacPage.tsx:3 ~ macList:", macList);
  type SampleProps = {
    name: string;
  };
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
              display,
              picture,
              chip,
              batteryAndPower,
              memory,
              storage,
              touchID,
              camera,
              audio,
              operatingSystem,
              inTheBox,
            } = data ?? {};
            return (
              <Grid item md={6}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    p: 5,
                    gap: 2,
                  }}
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
