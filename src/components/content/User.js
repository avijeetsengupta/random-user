import { Fragment, useState } from "react";
import React from "react";
import axios from "axios";
import Button from "./Button";
import { Link } from "react-router-dom";
import { textAlign } from "@mui/system";

const User = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeUser, setActiveUser] = useState(false);

  const onClickHandler = () => {
    setLoading(true);
    axios
      .get("https://randomuser.me/api/?results=50")
      .then((res) => {
        console.log(res.data.results);
        setUserData(res.data.results);
      })
      .catch((err) => {
        console.log(err);
        setLoading(true);
      })
      .finally(() => {
        setLoading(false);
        setActiveUser(true);
      });
  };
  return (
    <div>
      <Button isAcitve={activeUser} clicked={onClickHandler} />
      {loading ? (
        <h1 style={{ height: "100vh" }}>Loading...</h1>
      ) : (
        userData.map((user, index) => {
          return (
            <div className="user-app" style={{ display: "flex", justifyContent: "space-between" }}>
              <img src={user.picture.large} alt="user" style={{ margin: "20px" }} />
              <p style={{ margin: "20px" }}>{user.name.first}</p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default User;
