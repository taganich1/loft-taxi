import React from "react";
import "./Login.styles.scss";
import Back from "/js/react/project/loft_school/loft-taxi/src/img/registration-background.png";

const Login = (Registrationbackground) => {
  return (
    <div
      className='login'
      style={{
        fontSize: "30px",
        backgroundImage: "url(" + Back + ")",
      }}
    >
      login
    </div>
  );
};

export default Login;
