import { Container, MenuItem } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useItems } from "../context/ItemContext";
import { useState } from "react";

export default function AddNew() {
  const { itemDispatch } = useItems();
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNew((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(newItem);
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
      <button
        onClick={() => itemDispatch({ type: "SET_NEW_ITEM", payload: newItem })}
      >
        Add Product
      </button>
    </Container>
  );
}
