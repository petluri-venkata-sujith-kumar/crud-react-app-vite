import { Fragment, useContext, useEffect } from "react";
import { NavLink ,Link} from "react-router-dom";
import { AuthContextApi } from "../../context/AuthContext";
import ModalProvider, { ModalContextApi } from "../../context/ModalContext";
// import Modal from './../../helpers/modals/Modal';
import Login from "../../component/auth/Login";

const Menu = () => {
  let { isAuth, Logout ,currentUser} = useContext(AuthContextApi);
  // console.log(currentUser);
  let {toggle,handleToggle}=useContext(ModalContextApi)
  // console.log(toggle);
  const IsAuth = () => {
    return (
      <Fragment>
        <li>
          <Link to={`/users/${currentUser?.id}`}>{currentUser?.name}</Link>
        </li>
        <li>
          <figure>
            <picture className="profile_img">
              <img src={currentUser?.avatar} alt={currentUser?.name} />
            </picture>
          </figure>
        </li>
        <li>
          <button className="log-btn" onClick={() => Logout()}>
            logout
          </button>
        </li>
      </Fragment>
    );
  };
  const IsAnonymousUser = () => {
    return (
      <Fragment>
        <li>
          {/* <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Login
          </NavLink> */}
          <ModalProvider>
            <button onClick={handleToggle} className={`${toggle ? "log-btn" :"log-btn-off"}`}>Login</button>
              {toggle && <Login toggle={{toggle,handleToggle}}/>}
          </ModalProvider>
        </li>
        <li>
          <NavLink
            to="/signup"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Signup
          </NavLink>
        </li>
      </Fragment>
    );
  };
  return (
    <section className="navbar">
      <article>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            {isAuth === undefined || null ? <IsAnonymousUser /> : <IsAuth />}
          </ul>
        </nav>
      </article>
    </section>
  );
};

export default Menu;
