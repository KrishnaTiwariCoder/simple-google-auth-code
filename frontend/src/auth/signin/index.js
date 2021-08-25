import React from "react";
import { GoogleLogin } from "react-google-login";
import axios from "axios";

function SignIn() {
  const googleAuth = async ({ profileObj }) => {
    axios({
      method: "post",
      url: "/auth/google/signin",
      data: {
        googleId: profileObj.googleId,
        email: profileObj.email,
      },
    })
      .then((res) => {
        if (res.data) {
          window.location.href = "/";
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <GoogleLogin
      clientId="678625763284-od44lnbg4cs6nelik9rpe1ravuv505ge.apps.googleusercontent.com"
      onSuccess={googleAuth}
      onFailure={googleAuth}
      cookiePolicy={"single_host_origin"}
    />
  );
}

export default SignIn;
