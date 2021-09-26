import "./Header.styles.scss";
import { Link } from "react-router-dom";
import logo from "../../img/logo.svg";
import { useDispatch } from "react-redux";
import { logOutAction } from "../../redux/actions/actions";

const Header = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutAction);
    localStorage.removeItem("token");
  };

  return (
    <div>
      <header className="App-header">
        <div className="header-logo">
          <img
            src={logo}
            alt=""
            className="logo__loftcshool"
            width="200px"
            height="100px"
          />
        </div>
        <div className="navbar">
          <Link className="navbar-item" to="/map">
            Карта
          </Link>
          <Link className="navbar-item" to="/profile">
            Профиль
          </Link>
          <Link to="/login" className="navbar-item" onClick={handleLogOut}>
            Выйти
          </Link>
        </div>
      </header>
    </div>
  );
};

/*Header.propTypes = {
  handlePage: PropTypes.func.isRequired,
};*/

export default Header;
