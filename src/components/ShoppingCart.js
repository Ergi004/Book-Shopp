import React from "react";
import {  useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

function ShoppingCart({ cartItems, handleRemove, itemQty, itemsCost }) {
  const [method, setMethod] = React.useState("");
  const navigate = useNavigate();
  const navigateToCheckout = () => {
    navigate("/checkout");
  };
  
  const navigateToShop = () => {
    navigate("/");
  };

  const handleChange = (event) => {
    setMethod(event.target.value);
  };

  return (
    <Box>
      <Box sx={{ bgcolor: "#206A5D", height: "80px" }}>
        <Button onClick={()=> navigateToShop()} className="btn" sx={{ margin: "20px" }} variant="contained">
          Back to Shopping
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          margin: "30px auto",
          justifyContent: "center",
          maxWidth: "1000px",
          boxShadow: 7,
        }}
      >
        <Box
          sx={{
            margin: "20px",
            display: "flex",
            flexWrap: "wrap",
            maxWidth: "500px",
          }}
        >
          {cartItems.map((book) => (
            <Card
              key={book.primary_isbn10}
              style={{
                width: "200px",
                cursor: "pointer",
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.1)",
                transition: "box-shadow 0.3s",
                margin: "20px",
              }}
            >
              <img
                src={book.book_image}
                alt={book.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px 8px 0 0",
                }}
              />
              <CardContent style={{ padding: "8px" }}>
                <Typography
                  variant="subtitle1"
                  style={{
                    fontWeight: "bold",
                    marginBottom: "0.5rem",
                    minHeight: "3.6em",
                    maxHeight: "3.6em",
                    overflow: "hidden",
                  }}
                >
                  {book.title}
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: "center", padding: "8px" }}>
                <Button
                  variant="contained"
                  style={{ width: "100%" }}
                  onClick={() => handleRemove(book.primary_isbn10)}
                >
                  Remove
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
        <Box
          sx={{
            margin: "70px auto",
            width: "400px",
            boxShadow: 5,
            maxHeight: "600px",
          }}
        >
          <Box
            sx={{ maxWidth: "360px", margin: "0 auto", textDecoration: "none" }}
          >
            <CardContent sx={{ display: "flex", flexDirection: "column" }}>
              <h1 style={{ borderBottom: "1px solid #206A5D" }}>
                Order Details
              </h1>
              <h3>Shipping Method</h3>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label">
                  Shipping method
                </InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={method}
                  defaultValue="SStandard"
                  label="Shipping Method"
                  onChange={handleChange}
                >
                  <MenuItem value="U.SStandard">U.S Standard</MenuItem>
                  <MenuItem value="U.S2Day">U.S 2 day</MenuItem>
                  <MenuItem value="Express">Express</MenuItem>
                  <MenuItem value="CanadaStandard">Canada Standard</MenuItem>
                  <MenuItem value="InternationalStandard">
                    International Standard
                  </MenuItem>
                </Select>
              </FormControl>
              <p
                style={{
                  borderBottom: "1px #206A5D solid",
                  margin: "0 auto 20px",
                  paddingBottom: "20px",
                }}
              >
                8-12 business days + up to 48 hours for processing. AK, HI, PR,
                and GU: allow up to 45 days to arrive
              </p>
              <h1 style={{ margin: "0 auto 20px" }}>Order Summary</h1>
              <p>Items({itemQty}): </p>
              <p>U.S Standard: FREE</p>
              <p>Total: {itemsCost}</p>
              <Button
                onClick={() => navigateToCheckout()}
                variant="contained"
                sx={{ margin: "0 auto" }}
              >
                Proceed to Checkout
              </Button>
            </CardContent>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ShoppingCart;
