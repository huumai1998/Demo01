import React from "react";
import { Button } from "@mui/material";

export const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home">
          <div className="home-text">
            <p>Welcome to my page. This is Remember Demo page</p>
          </div>
          <div className="btn-home">
            <div>
              <Button>Login</Button>
            </div>
          </div>
          <div className="link-to-register-page">
            <p>
              Don't have account yet? <a href="#">Create one.</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
