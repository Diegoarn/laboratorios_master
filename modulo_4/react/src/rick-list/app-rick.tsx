import React from "react";
import { useNavigate } from "react-router-dom";
import { CharacterTable } from "./character-table";

export const RickPage: React.FC = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/");
  };
  return (
    <>
      <CharacterTable></CharacterTable>
      <div>
        <button onClick={handleLogin} className="button-back">
          Back to login page
        </button>
      </div>
    </>
  );
};
