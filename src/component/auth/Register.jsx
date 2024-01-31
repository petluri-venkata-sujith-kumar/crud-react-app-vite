import { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContextApi } from './../../context/AuthContext';

const Register = () => {
  let {signup}=useContext(AuthContextApi)
  let navigate = useNavigate();
  let [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
    isLoading: false,
  });
  let { name, email, password, avatar, isLoading } = state;
  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let payload = { name, email, password, avatar };
      console.log(payload);
      signup(payload)
      toast.success("successfully registered...");
      navigate("/login");
      setState({name:"",email:"",password:"",avatar:""})
    } catch (error) {}
  };
  return (
    <main className="authBlock auth_container">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group1">
          <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
            placeholder="enter name"
          />
          </div>
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
          <label htmlFor="avatar">Avatar url</label>
          <input
            type="url"
            name="avatar"
            value={avatar}
            onChange={handleChange}
            required
            placeholder="enter avatar url"
          />
        </div>
        <div className="form-group">
          <button>{isLoading ? "loading ....." : "Register"}</button>
        </div>
      </form>
    </main>
  );
};

export default Register;
