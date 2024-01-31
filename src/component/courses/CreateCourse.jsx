import { useState } from "react";
import { useNavigate } from "react-router-dom";
import courseServices from "./../../services/CourseService";
import toast from "react-hot-toast";
const CreateCourse = () => {
  let navigate = useNavigate();
  let [state, setState] = useState({
    title: "",
    trainer: "",
    description: "",
    createdAt: "",
    updatedAt: "",
    isLoading: false,
  });
  let { title, trainer, isLoading, description, createdAt, updatedAt } = state;
  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let payload = { title, trainer, description, createdAt, updatedAt };
      // await axios.post("http://localhost:5000/courses", payload);
      courseServices.createService(payload);
      toast.success("successfully course has been created...");
      //! built in window fetch api with post
      // await window.fetch("http://localhost:5000/courses",{
      //     method:"POST",
      //     headers:{
      //         "Content-Type":"application/json"
      //     },
      //     body:JSON.stringify(payload)
      // })
      navigate("/");
      setState({ title: "", trainer: "" });
    } catch (error) {}
  };
  return (
    <main className="authBlock">
      <h1>Create Course</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group1">
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={handleChange}
              required
              placeholder="enter title"
            />
          </div>
          <div>
            <label htmlFor="trainer">Trainer</label>
            <input
              type="text"
              name="trainer"
              value={trainer}
              onChange={handleChange}
              required
              placeholder="enter trainer"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            cols="10"
            rows="2"
            value={description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="createdAt">Course created at</label>
          <input
            type="date"
            name="createdAt"
            value={createdAt}
            onChange={handleChange}
            required
            placeholder="enter date"
          />
        </div>
        <div className="form-group">
          <button>{isLoading ? "loading ....." : "Create Course"}</button>
        </div>
      </form>
    </main>
  );
};

export default CreateCourse;
