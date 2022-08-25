import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { cargarDataMembers } from "../conection/api";
import { DataModel } from "./model";

export const MemberData = () => {
  // const { member } = props;
  const { login } = useParams();
  const [member, setMember] = React.useState<DataModel>({
    name: "",
    company: "",
    type: "",
    url: "",
  });

  const listData = async () => {
    let loadData = await cargarDataMembers(login);

    setMember(loadData);
  };
  listData();

  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/companyList/app");
  };

  return (
    <>
      <div>
        <h3>INFO MEMBER:</h3>
        <span>Nombre: {member.name}</span>
        <br />
        <span>Company: {member.company}</span>
        <br />
        <span>Type: {member.type}</span>
        <br />
        <span>Url: {member.url}</span>
      </div>
      <button onClick={handleLogin} className="button-back">
        Back to members page
      </button>
    </>
  );
};
