import { createStyles } from "@material-ui/core/styles";

const buttonStyle = createStyles({
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "2rem", // Adjust spacing as needed
  },
  viewInStoreButton: {
    marginRight: "1rem", // Adjust spacing as needed
    // Define styles for the "View in Store" button
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    cursor: "pointer",
    textDecoration: "none",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#0056b3",
    },
  },
  buyNowButton: {
    // Define styles for the "Buy Now" button
    backgroundColor: "#28a745",
    color: "#fff",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    cursor: "pointer",
    textDecoration: "none",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#218838",
    },
  },
});

export default buttonStyle;