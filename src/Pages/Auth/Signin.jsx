import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "src/Redux/AuthSlice";

const Signin = ({ togglePanel }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
    console.log("login form", formData);
  };
  return (
    <div className="">
      <h1 className="pb-8 text-lg font-bold text-center">Login</h1>
      <form className="space-y-3" onSubmit={handleSubmit}>
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

        <div>
          <Button
            fullWidth
            className="customButton"
            type="submit"
            sx={{ padding: ".9rem" }}
          >
            Login
          </Button>
        </div>
      </form>
      <div className="flex items-center justify-center gap-2 py-5 mt-5">
        <span>Don't have an account yet?</span>
        <Button onClick={togglePanel}>Sign up</Button>
      </div>
    </div>
  );
};

export default Signin;
