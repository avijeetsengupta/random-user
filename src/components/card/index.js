import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import axios from "axios";
import Button from "../content/Button";
import { Link } from "react-router-dom";

export default function ActionAreaCard() {
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
    <>
      <Button isAcitve={activeUser} clicked={onClickHandler} />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        userData.map((user, index) => {
          return (
            <div>
              <Card sx={{ maxWidth: 345 }} style={{ margin: "20px", width: "300px" }}>
                <CardActionArea>
                  <CardMedia component="img" height="140" src={user.picture.large} alt="green iguana" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      <Link to={`/nextpage/${user.cell}`}>
                        {user.name.first} {user.name.last}
                      </Link>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {user.email}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          );
        })
      )}
    </>
  );
}
