import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContextApi } from "./../../context/AuthContext";
import { ModalContextApi } from "../../context/ModalContext";

const Login = () => {
  let { login } = useContext(AuthContextApi);
  let {toggle}=useContext(ModalContextApi)
  // console.log(toggle);
  let navigate = useNavigate();
  let [state, setState] = useState({
    email: "",
    password: "",
    isLoading: false,
  });
  let { email, password, isLoading } = state;
  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let payload = { email, password };
      // console.log(payload);
      await login(payload);
      toast.success("successfully Logged in...");
      navigate("/users");
      setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
      toast.error(error.response.statusText);
    }
  };
  return (
    <main className="authBlock auth_container " id={`${toggle ? "":"toggle_container"}`}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group1">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
              placeholder="enter email"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="enter password"
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <button>{isLoading ? "loading ....." : "Login"}</button>
        </div>
      </form>
    </main>
  );
};

export default Login;
