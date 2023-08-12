import { Container, MenuItem } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useItems } from "../context/ItemContext";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function AddNew() {
  const { itemDispatch } = useItems();
  const [isError, setErr] = useState(false);
  const [newItem, setNew] = useState({
    name: "",
    description: "",
    department: "",
    price: 0,
    sku: "",
    supplier: "",
    stock: 0,
    imageUrl: "",
    delivered: 0,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setErr(false);
    const { name, value } = e.target;
    setNew((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(newItem);
  };

  const handleCheckSubmit = () => {
    if (
      newItem.name &&
      newItem.description &&
      newItem.department &&
      newItem.price &&
      newItem.price &&
      newItem.sku &&
      newItem.supplier &&
      newItem.stock &&
      newItem.imageUrl &&
      newItem.delivered
    ) {
      setErr(false);
      itemDispatch({ type: "SET_NEW_ITEM", payload: newItem });
      navigate("/products/all");
    } else {
      setErr(true);
    }
  };

  const dept = [
    {
      value: "Kitchen",
      label: "Kitchen",
    },
    {
      value: "Clothing",
      label: "Clothing",
    },
    {
      value: "Toys",
      label: "Toys",
    },
  ];

  return (
    <Container className="add-new">
      <h1>Add New Product</h1>
      <TextField
        sx={{ marginBottom: "10px" }}
        fullWidth
        id="outlined-select-currency"
        select
        label="Department"
        name="department"
        onChange={handleChange}
        value={newItem?.department}
        // defaultValue="EUR"
        // helperText="Please select your currency"
      >
        {dept?.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        sx={{ marginBottom: "10px" }}
        fullWidth
        label="Name"
        id="fullWidth"
        name="name"
        value={newItem?.name}
        onChange={handleChange}
      />
      <TextField
        sx={{ marginBottom: "10px" }}
        fullWidth
        label="Description"
        id="fullWidth"
        name="description"
        value={newItem?.description}
        onChange={handleChange}
      />
      <TextField
        sx={{ marginBottom: "10px" }}
        fullWidth
        label="Price"
        type="number"
        id="fullWidth"
        value={newItem?.price}
        onChange={handleChange}
        name="price"
      />
      <TextField
        sx={{ marginBottom: "10px" }}
        fullWidth
        type="number"
        label="Stock"
        id="fullWidth"
        name="stock"
        value={newItem?.stock}
        onChange={handleChange}
      />
      <TextField
        sx={{ marginBottom: "10px" }}
        fullWidth
        label="Sku"
        id="fullWidth"
        name="sku"
        value={newItem?.sku}
        onChange={handleChange}
      />
      <TextField
        sx={{ marginBottom: "10px" }}
        fullWidth
        label="Supplier"
        id="fullWidth"
        name="supplier"
        value={newItem?.supplier}
        onChange={handleChange}
      />
      <TextField
        sx={{ marginBottom: "10px" }}
        fullWidth
        type="number"
        label="Delivered"
        id="fullWidth"
        name="delivered"
        value={newItem?.delivered}
        onChange={handleChange}
      />
      <TextField
        sx={{ marginBottom: "10px" }}
        fullWidth
        label="Image Url"
        id="fullWidth"
        name="imageUrl"
        value={newItem?.imageUrl}
        onChange={handleChange}
      />
      {isError && <p style={{ color: "red" }}>Enter All Fields</p>}
      <button onClick={handleCheckSubmit}>Add Product</button>
    </Container>
  );
}
