import { useState } from "react";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import Profile from "./components/Profile/Profile";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import Back from "./img/registration-background.png";

function App(props) {
  const [router, setRouter] = useState("registration");

  const submitRegister = () => {
    setRouter("map");
    console.log(router);
  };

  const login = () => {
    setRouter("login");
  };

  const handlePage = (event) => {
    setRouter(event.target.value);
  };

  const backImg = () => {
    return Back;
  };

  console.log(router);

  return (
    <div className='App'>
      {router === "login" ? null : router === "registration" ? null : (
        <Header handlePage={handlePage} />
      )}

      {router === "map" ? (
        <Map />
      ) : router === "registration" ? (
        <Registration
          back={backImg}
          submitRegister={submitRegister}
          login={login}
        />
      ) : router === "profile" ? (
        <Profile />
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
