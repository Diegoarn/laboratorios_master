import React from "react";
import { MemberEntity } from "./model";
import "/styles.css";

interface Props {
  member: MemberEntity;
}

export const MemberTableRow: React.FC<Props> = (props) => {
  const { member } = props;

  return (
    <tr key={member.id} className="target-container">
      <td>
        <img src={member.avatar_url} />
      </td>
      <td>
        <span>{member.id}</span>
      </td>
      <td>
        <span>{member.login}</span>
      </td>
    </tr>
  );
};
