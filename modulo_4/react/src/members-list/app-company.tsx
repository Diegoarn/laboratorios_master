import React from "react";
import { MemberTable } from "./member-table";
import { useNavigate } from "react-router-dom";

export const AppCompany: React.FC = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/");
  };
  return (
    <>
      <MemberTable />

      <div>
        <button onClick={handleLogin} className="button-back">
          Back to login page
        </button>
      </div>
    </>
  );
};
