import { useState } from "react";
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import Profile from "./components/Profile/Profile";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import Back from "./img/registration-background.png";
import AuthContext from "./contex/AuthContext";

function App() {
  const [router, setRouter] = useState("registration");

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  /*  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);*/

  const logout = () => {
    setIsLoggedIn(false);
    setRouter("registration");
  };

  const login = (event) => {
    let authData = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    console.log(authData);
    setIsLoggedIn(true);
    setRouter("map");
  };

  const handlePage = (event) => {
    setRouter(event.target.value);
  };

  const handleRegister = () => {
    setRouter("registration");
  };

  const handleLogin = () => {
    setRouter("login");
  };

  const backImg = () => {
    return Back;
  };

  return (
    <div className="App">
      <AuthContext.Provider
        value={{
          logout,
          login,
        }}
      >
        {router === "login" ? null : router === "registration" ? null : (
          <Header handlePage={handlePage} />
        )}

        {router === "map" && isLoggedIn === true ? (
          <Map />
        ) : router === "registration" ? (
          <Registration back={backImg} handleLogin={handleLogin} />
        ) : router === "profile" && isLoggedIn === true ? (
          <Profile />
        ) : (
          <Login handleRegister={handleRegister} />
        )}
      </AuthContext.Provider>
    </div>
  );
}

export default App;
