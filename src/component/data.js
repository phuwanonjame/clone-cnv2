import React from "react";
import data from "./DATA.json";
function Data() {
  console.log(data);
  return (
    <div>
      {data.map((user, index) => (
        <div key={index}>
          <p>
            Name: {user.first_name} {user.last_name}
          </p>
          <p>Email: {user.email}</p>
          <p>Gender: {user.gender}</p>
          <p>Country: {user.country}</p>
          <img src={user.image} alt="User" />
        </div>
      ))}
    </div>
  );
}

export default Data;
