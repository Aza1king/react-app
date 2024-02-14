import React from "react";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();

  const onBtnClick = () => navigate(-1);
  return (
    <div>
      <h2>Users page</h2>
      <button onClick={onBtnClick}>Go back</button>
    </div>
  );
};

export default Users;
