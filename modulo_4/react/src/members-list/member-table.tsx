import React from "react";
import { MemberEntity } from "./model";
import { MemberTableRow } from "./member-table-row";
import { cargarListaApi } from "../conection/api";
import { useNavigate } from "react-router-dom";
import { Context } from "./context";

export const MemberTable: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  const { company, setCompany } = React.useContext(Context);

  const listMembers = async () => {
    let cargarv = await cargarListaApi(company);
    setMembers(cargarv);
  };

  const navigate = useNavigate();
  const handleData = (login) => {
    navigate("/memberdata/" + login);
  };

  React.useEffect(() => {
    listMembers();
  }, []);

  return (
    <>
      <table>
        <thead>
          <h2>Select the company:</h2>
          <div className="selector">
            <input
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <button onClick={listMembers} className="button">
              click
            </button>
          </div>
          <tr className="target-container">
            <th>Avatar</th>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>

        <tbody>
          {members.map((member) => (
            <button onClick={() => handleData(member.login)}>
              <MemberTableRow key={member.id} member={member} />
            </button>
          ))}
        </tbody>
      </table>
    </>
  );
};
