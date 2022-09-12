import React from "react";
import { Button, TextField } from "@mui/material";

export const Login = () => {
  return (
    <>
      <div className="login-container">
        <div className="login">
          <form>
            <TextField className="input" label="username" type="text" />
            <TextField className="input" label="password" type="password" />
            <Button className="submit-btn-login">Login</Button>
          </form>
        </div>
      </div>
    </>
  );
};
