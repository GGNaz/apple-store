import { Container, Button, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";
import { cartStore } from "../../zustand/cartStore";
import { shallow } from "zustand/shallow";
export default function Navbar() {
  const { mycart } = cartStore((state) => state, shallow);
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        // left: 0,
        zIndex: 50,
        backgroundColor: "white",
        boxShadow: 1,
        width: "100vw",
        opacity: "80%",
      }}
    >
      <Container
        sx={{ padding: 1 }}
        style={{
          color: "white",
          display: "flex",
          // padding: 5,
          justifyContent: "space-between",
        }}
      >
        <Box style={{ gap: 15, display: "flex", alignItems: "center" }}>
          <NavLink to="/">
            <img
              src={logo}
              alt="logo"
              style={{ height: "2em", width: "2em" }}
            />{" "}
          </NavLink>
          <NavLink
            to="/mac"
            style={{ textDecoration: "none", color: "#161617" }}
          >
            Mac
          </NavLink>
          <NavLink
            to="/ipad"
            style={{ textDecoration: "none", color: "#161617" }}
          >
            Ipad
          </NavLink>
          <NavLink
            to="/iphone"
            style={{ textDecoration: "none", color: "#161617" }}
          >
            Iphone
          </NavLink>
          <NavLink
            to="/airpods"
            style={{ textDecoration: "none", color: "#161617" }}
          >
            Airpods
          </NavLink>
        </Box>
        <Button
          style={{ color: "#161617", display: "flex", position: "relative" }}
        >
          <LocalMallRoundedIcon />
          {mycart?.length > 0 && (
            <Box
              sx={{ position: "absolute", bottom: 0, right: 10 }}
              style={{
                backgroundColor: "gray",
                color: "white",
                // borde: "black",
                zIndex: 10,
                height: "18px",
                width: "18px",
                fontSize: "10px",
                borderRadius: "100%",
              }}
              className="animate__animated animate__backInUp"
            >
              <span>{mycart?.length}</span>
            </Box>
          )}
        </Button>
      </Container>
    </Box>
  );
}
