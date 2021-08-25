import React, { useEffect, useState } from "react";
import axios from "axios";

function Homepage() {
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    axios
      .get("/profile")
      .then((profile) => {
        if (profile) {
          console.log(profile);
          setUser(profile.data);
          setLoading(false);
        } else {
          console.log("Something went wrong :(");
        }
      })
      .catch((err) => {
        console.log(err.message);
        window.location.href = "/signin";
      });
  }, []);

  if (isLoading) return "Loading...";
  else {
    return (
      <div>
        <p>Email: {user.email}</p>
        <p>First Name: {user.first_name}</p>
        <p>Last Name: {user.last_name}</p>
      </div>
    );
  }
}

export default Homepage;
