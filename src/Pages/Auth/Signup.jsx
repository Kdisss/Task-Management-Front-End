import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "src/Redux/AuthSlice";

const Signup = ({ togglePanel }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(formData));
    console.log("login form", formData);
  };
  return (
    <div className="">
      <h1 className="pb-8 text-lg font-bold text-center">Register</h1>
      <form className="space-y-3" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Full Name"
          name="fullName"
          type="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your full name..."
        />

        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your e-mail..."
        />

        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password..."
        />

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Role</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formData.role}
            label="role"
            name="role"
            onChange={handleChange}
          >
            <MenuItem value={"ROLE_CUSTOMER"}>USER</MenuItem>
            <MenuItem value={"ROLE-ADMIN"}>ADMIN</MenuItem>
          </Select>
        </FormControl>

        <div>
          <Button
            fullWidth
            className="customButton"
            type="submit"
            sx={{ padding: ".9rem" }}
          >
            Register
          </Button>
        </div>
      </form>
      <div className="flex items-center justify-center gap-2 py-5 mt-5">
        <span>Already have an account?</span>
        <Button onClick={togglePanel}>sign in</Button>
      </div>
    </div>
  );
};

export default Signup;
