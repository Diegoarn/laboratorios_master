import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import Button from "@mui/material/Button";

export const LoginPage = () => {
  const navigate = useNavigate();
  const handleUser = () => {
    navigate("/companyList/app");
  };
  const handleRick = () => {
    navigate("/rickmorty");
  };

  return (
    <>
      <h1>Where do you want to go?</h1>
      <div className="container">
        <div>
          <Button
            onClick={handleUser}
            variant="contained"
            color="primary"
            size="large"
          >
            Go to Members List
          </Button>
        </div>
        <div>
          <Button
            onClick={handleRick}
            variant="contained"
            color="primary"
            size="large"
          >
            Go to Rick and Morty
          </Button>
        </div>
      </div>
    </>
  );
};
