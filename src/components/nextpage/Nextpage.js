import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Nextpage = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setDetails(data.results));
  }, []);
  console.log(details);
  return (
    <div>
      {details.map((val) => (
        <div key={val.cell}>
          <img src={val.picture.large} alt="profile" />

          <h1>
            Name: {val.name.first} {val.name.last}
          </h1>
          <h1>Email {val.email}</h1>
          <h1>No: {val.phone}</h1>
          <h1>
            Location: street no:{val.location.street.number}, {val.location.street.name}, {val.location.city},{" "}
            {val.location.state}, {val.location.postcode}
          </h1>
          <h1></h1>
        </div>
      ))}
    </div>
  );
};

export default Nextpage;
