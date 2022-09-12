import React from "react";
import { Button, TextField } from "@mui/material";

export const Register = () => {
  return (
    <>
      <div className="register-container">
        <div className="register">
          <form>
            <TextField
              className="input"
              label="Fullname"
              placeholder="John Wick"
              type="text"
            />
            <TextField
              className="input"
              label="Email"
              type="text"
              placeholder="johnwich@gmail.com"
            />
            <TextField className="input" label="Username" type="text" />
            <TextField className="input" label="Password" type="password" />
            <TextField className="input" label="Phone" type="tel" />
            <TextField
              className="input"
              label="Address (Optional)"
              type="text"
            />
            <Button className="submit-btn-login">Register</Button>
          </form>
        </div>
      </div>
    </>
  );
};
