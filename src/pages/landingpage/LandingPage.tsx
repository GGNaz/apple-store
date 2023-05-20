import React, { useState } from "react";
// import iphonewallpaper from "../../assets/iphonewallpaper.jpg";
import iphone14 from "../../assets/iphone14.png";
import {
  Container,
  Typography,
  Box,
  Button,
  Radio,
  RadioGroup,
  OutlinedInput,
  Input,
} from "@mui/material";
import { CartProps, ColorVariantsProps } from "./ts/landingmodule";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
function LandingPage() {
  const [val, setVal] = useState<CartProps>({
    name: "",
    quantity: 1,
    color: "gray",
    description: "",
    picture: "",
  });
  console.log("🚀 ~ file: LandingPage.tsx:21 ~ LandingPage ~ val:", val);

  const variantsLayout = () => {
    const colors = [
      {
        value: "gray",
        color: "#585061",
      },
      {
        value: "yellow",
        color: "#F2E8D1",
      },
      {
        value: "red",
        color: "#BF0013",
      },
      {
        value: "green",
        color: "#276787",
      },
    ];
    return (
      <Box gap={2}>
        <RadioGroup
          defaultValue="gray"
          name="controlled-radio-buttons-group"
          style={{ display: "flex", flexDirection: "row" }}
          // value={value}
          onChange={({ target }) => setVal({ ...val, color: target.value })}
        >
          {colors.map(({ value, color }: ColorVariantsProps) => {
            return <Radio style={{ color: value }} value={value} />;
          })}
        </RadioGroup>

        {/* <Radio style={{ color: "#585061" }} />
      <Radio style={{ color: "#F2E8D1" }} />
      <Radio style={{ color: "#BF0013" }} />
      <Radio style={{ color: "#276787" }} /> */}
      </Box>
    );
  };

  const quantityLayout = () => {
    let copyQuantity = val.quantity;
    const handelSub = () => {
      if (copyQuantity > 1) {
        copyQuantity = copyQuantity - 1;
        return setVal({ ...val, quantity: copyQuantity });
      }
    };

    const handleAdd = () => {
      copyQuantity = copyQuantity + 1;
      return setVal({ ...val, quantity: copyQuantity });
    };

    return (
      <Box style={{ display: "flex", flexDirection: "row" }}>
        <Button>
          <RemoveRoundedIcon onClick={handelSub} />
        </Button>
        <OutlinedInput
          type="text"
          size="small"
          sx={{ width: "3rem" }}
          value={val.quantity}
        />
        <Button>
          <AddRoundedIcon onClick={handleAdd} />
        </Button>
      </Box>
    );
  };

  return (
    <Box
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        marginBottom: "5em",
      }}
      gap={5}
    >
      <Box
        style={{
          position: "relative",
          top: 0,
          left: 0,
          height: "100vh",
          width: "100%",
        }}
      >
        {/* <img
          src={iphonewallpaper}
          style={{
            objectFit: "cover",
            height: "100vh",
            width: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -10,
          }}
        /> */}
        <Box
          style={{
            backgroundColor: "#F5F5F7",
            position: "absolute",
            display: "flex",
            justifyContent: "space-evenly",
            top: -5,
            left: 0,
            height: "100vh",
            width: "100%",
          }}
        >
          <Box
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "100%", p: 5 }}>
              <Typography
                style={{ color: "#161617", fontSize: "5em", fontWeight: 700 }}
              >
                Pro.
              </Typography>
              <Typography
                style={{ color: "#161617", fontSize: "5em", fontWeight: 700 }}
              >
                Beyond.
              </Typography>
            </Box>
          </Box>
          <Box style={{ width: "100%" }}>
            <img src={iphone14} alt="iphone14" />
          </Box>
          <Box
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box style={{ display: "flex", flexDirection: "column" }} gap={1}>
              <Typography
                style={{ color: "#161617", fontSize: "2em", fontWeight: 700 }}
              >
                iPhone 14
              </Typography>
              <Box style={{ display: "flex", flexDirection: "column" }} gap={2}>
                <Box style={{ display: "flex", flexDirection: "column" }}>
                  <Typography sx={{ color: "gray" }}>Color variants</Typography>

                  {variantsLayout()}
                </Box>
                {quantityLayout()}
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingTop: 5,
                  }}
                  gap={1}
                >
                  <Button
                    variant="contained"
                    style={{
                      width: "10rem",
                      textTransform: "none",
                      borderRadius: "7px",
                    }}
                  >
                    Buy
                  </Button>
                  <Button
                    variant="outlined"
                    style={{
                      width: "10rem",
                      textTransform: "none",
                      borderRadius: "7px",
                      color: "#161617",
                      borderColor: "#161617",
                    }}
                  >
                    Add to cart
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box>
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Typography
            style={{ color: "#161617", fontSize: "2em", fontWeight: 700 }}
          >
            Which iPhone is right for you?
          </Typography>
          <Box
            style={{ display: "flex", flexDirection: "row", cursor: "pointer" }}
            gap={5}
          >
            <Box
              style={{ display: "flex", flexDirection: "column" }}
              alignItems="center"
              gap={2}
            >
              <img
                style={{ height: "10em" }}
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-compare-iphone-14-pro-202209?wid=366&hei=508&fmt=jpeg&qlt=90&.v=1661471046256"
              />
              <span style={{ fontWeight: 500 }}>iPhone 14 Pro</span>
            </Box>
            <Box
              style={{ display: "flex", flexDirection: "column" }}
              alignItems="center"
              gap={2}
            >
              <img
                style={{ height: "10em" }}
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-compare-iphone-14-202209?wid=364&hei=508&fmt=jpeg&qlt=90&.v=1660759995969"
              />
              <span style={{ fontWeight: 500 }}>iPhone 14 </span>
            </Box>
            <Box
              style={{ display: "flex", flexDirection: "column" }}
              alignItems="center"
              gap={2}
            >
              <img
                style={{ height: "10em" }}
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-compare-iphone-13-202209?wid=364&hei=508&fmt=jpeg&qlt=90&.v=1660759995963"
              />
              <span style={{ fontWeight: 500 }}>iPhone 13</span>
            </Box>
            <Box
              style={{ display: "flex", flexDirection: "column" }}
              alignItems="center"
              gap={2}
            >
              <img
                style={{ height: "10em" }}
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-compare-iphone-se-202209?wid=364&hei=508&fmt=jpeg&qlt=90&.v=1660759995953"
              />
              <span style={{ fontWeight: 500 }}>iPhone SE</span>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box
        style={{
          position: "relative",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="https://www.apple.com/v/iphone/home/bo/images/overview/retail/why_apple__ezn1ktvka6oi_large.jpg"
          style={{ width: "100%" }}
        />
        <Box
          style={{
            zIndex: 10,
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography style={{ fontWeight: 600, fontSize: "3em" }}>
            Why Apple is the best{" "}
          </Typography>
          <Typography style={{ fontWeight: 600, fontSize: "3em" }}>
            place to buy iPhone.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default LandingPage;
