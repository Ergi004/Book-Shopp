import React from "react";
import { Modal, Box, Typography, Card, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const AddToCardModal = ({ open, handleClose, book, goToCart }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    minHeight: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    transformDuration: "3s",
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box sx={{ display: "flex", borderBottom: "1px black solid" }}>
          <CheckIcon
            color="success"
            sx={{ margin: "5px", width: "40px", height: "40px" }}
          />
          <Typography
            sx={{ fontWeight: "bold", margin: "5px", fontSize: "25px" }}
          >
            Added To Your Cart
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          {book && (
            <Card
              key={book.primary_isbn10}
              style={{
                margin: "25px 7px",
                width: "200px",
                textAlign: "center",
                cursor: "pointer",
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.1)",
                transition: "box-shadow 0.3s",
              }}
            >
              <img
                src={book.book_image}
                alt={book.title}
                style={{
                  width: "100%",
                  height: "250px",
                  borderRadius: "8px 8px 0 0",
                }}
              />
            </Card>
          )}
          <Box sx={{ width: "170px", margin: "20px" }}>
            {book && (
              <>
                <h2 style={{fontSize:'20px'}}>{book.title}</h2>
                <h4>By: {book.author}</h4>{" "}
                <h4>Price: {book.price}$</h4>
                <h4>Description: {book.description}</h4>
              </>
            )}
          </Box>
        </Box>
        <Button
          onClick={() => {
            handleClose();
          }}
          variant="contained"
          color="success"
          sx={{ width: "100%", margin: "10px auto", boxShadow: 6 }}
        >
          Continue shopping
        </Button>
        <Button
          onClick={goToCart}
          variant="outlined"
          color="success"
          sx={{
            width: "100%",
            margin: "10px auto",
            boxShadow: 6,
            justifyContent: "space-between",
          }}
        >
          <p style={{ margin: "0 auto" }}>View Cart & Checkout</p>
          <AddShoppingCartIcon />
        </Button>
      </Box>
    </Modal>
  );
};

export default AddToCardModal;
