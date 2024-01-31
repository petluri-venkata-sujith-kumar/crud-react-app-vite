import {useContext,Fragment} from "react";
import { NavLink } from "react-router-dom";
import { AuthContextApi } from "../../context/AuthContext";

const SidebarMenu = () => {
  let { isAuth } = useContext(AuthContextApi);
//   console.log(isAuth);
  const IsAuth = () => {
    return (
      <Fragment>
        <li>
          <NavLink
            to="/create-course"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Create Course
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Users
          </NavLink>
        </li>
      </Fragment>
    );
  };
  return (
    <ul>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
      </li>
      {
        isAuth && <IsAuth/>
      }
    </ul>
  );
};

export default SidebarMenu;
