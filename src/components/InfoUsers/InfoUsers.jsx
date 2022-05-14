import React, { useContext, useEffect, useState } from "react";
import { getAllUsers } from "../../services/users";
import { useNavigate } from "react-router-dom";
import Context from "../../Context/Context";
import { Table } from "react-bootstrap";
import "./infousers.css"

export default function InfoUsers() {
  const [data, setData] = useState([]);
  const { setUpdateUser } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    async function getInfo() {
      const users = await getAllUsers();

      return setData(users);
    }

    getInfo();
  }, []);

  const handleCoins = (email, coin) => {
    const dataUser = {
      email,
      coin,
    };

    setUpdateUser(dataUser);

    navigate("/admin/update_user");
  };

  return (
    <div>
      <Table striped bordered >
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Moedas</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            user.role === "admin" ? null : (
            <tr>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.coin}</td>
              <button
                type="button"
                className="btn-users"
                onClick={() => handleCoins(user.email, user.coin)}
              >
                Alterar moedas
              </button>
            </tr>
            )
          ))}
        </tbody>
      </Table>
    </div>
  );
}
