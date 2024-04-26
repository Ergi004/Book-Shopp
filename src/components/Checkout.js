import React from "react";
import { Card, Button, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";

const Checkout = () => {
  return (
    <Box>
      <Box sx={{ padding: "50px", boxShadow: 10, bgcolor: "#AFC8AD" }}>
        <h1>Final step</h1>
      </Box>
      <Box
        sx={{
          display: "flex",
          margin: "30px auto",
          maxWidth: "800px",
        }}
      >
        <Card
          sx={{
            minWidth: "300px",
            textAlign: "center",
            padding: "30px",
            bgcolor: "#F2F1EB",
            maxHeight: "370px",
          }}
        >
          <h2>Returning Costumer</h2>
          <h4>Log in for faster checkout</h4>
          <TextField
            sx={{ margin: "5px" }}
            fullWidth
            label="Email Address"
            id="fullWidth"
          />
          <TextField
            sx={{ margin: "5px" }}
            fullWidth
            label="Password"
            id="fullWidth"
          />
          <Button
            fullWidth
            sx={{ margin: "20px auto", height: "40px" }}
            variant="contained"
          >
            Log in & continue
          </Button>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Keep me logged in"
            />
          </FormGroup>
        </Card>
        <Card sx={{ textAlign: "center", padding: "30px", bgcolor: "#F2F1EB" }}>
          <h2>Returning Costumer</h2>
          <h4>
            No account? Create an account now or checkout as a guest. Either way
            we'll need your email address to send you order information
          </h4>
          <TextField
            sx={{ margin: "5px" }}
            fullWidth
            label="Email Address"
            id="fullWidth"
          />
          <TextField
            sx={{ margin: "5px" }}
            fullWidth
            label="Confirm Email Address"
            id="fullWidth"
          />
          <TextField
            sx={{ margin: "5px" }}
            fullWidth
            label="Password"
            id="fullWidth"
          />
          <p>
            6 character minimum, case-sensitive, no spaces. Tip: Use upper and
            lowercase, numbers, and symbols for strong passwords.
          </p>
          <Button
            fullWidth
            sx={{ margin: "20px auto", height: "40px" }}
            variant="contained"
          >
            Continue
          </Button>
        </Card>
      </Box>
    </Box>
  );
};

export default Checkout;
