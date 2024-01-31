import { useEffect, useState } from "react";
import { useNavigate ,useParams} from "react-router-dom";
import courseServices from "../../services/CourseService";
import toast from "react-hot-toast";
courseServices
const CreateCourse = () => {
  let navigate = useNavigate();
  let {id}=useParams()
  let [state, setState] = useState({
    title: "",
    trainer: "",
    description: "",
    updatedAt: "",
    isLoading: false,
  });
  let { title, trainer, isLoading, description, updatedAt } = state;
  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  
  useEffect(()=>{
    let fetchCourse=async ()=>{
        // let {data}=await axios.get(`http://localhost:5000/courses/${id}`)
        let data=await courseServices.fetchId(id)
        setState(data)
      }
      fetchCourse()
  },[id])
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let payload = { title, trainer, description, updatedAt };
      // await axios.put(`http://localhost:5000/courses/${id}`, payload);
      courseServices.updateService(id,payload)
      toast.success("course has been updated successfully...")
      navigate("/");
    } catch (error) {}
  };
  return (
    <main className="authBlock">
      <h1>Update Course</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
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
        <div className="form-group">
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
          <label htmlFor="updatedAt">Course Updated at</label>
          <input
            type="date"
            name="updatedAt"
            value={updatedAt}
            onChange={handleChange}
            placeholder="enter date"
            required
          />
        </div>
        <div className="form-group">
          <button>{isLoading ? "loading ....." : "Update Course"}</button>
        </div>
      </form>
    </main>
  );
};

export default CreateCourse;
