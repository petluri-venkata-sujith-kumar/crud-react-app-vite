import { Link, useLocation, useNavigate } from "react-router-dom";
import Moment from "moment";
import courseServices from "../../services/CourseService";
courseServices;
const CourseDetails = () => {
  let navigate = useNavigate();
  let {
    state: { id, title, trainer, description, createdAt, updatedAt },
  } = useLocation();
  let deleteCourse = async (id) => {
    if (window.confirm() === true) {
      // await axios.delete(`http://localhost:5000/courses/${id}`)
      courseServices.deleteService(id);
      navigate("/");
    } else {
      navigate("/");
    }
  };
  return (
    <div className="course-details">
      <header>
        <Link to="/" className="btn-help back">
          back
        </Link>
        <Link
          to="/"
          className="btn-help delete"
          onClick={() => deleteCourse(id)}
        >
          delete
        </Link>
        <Link to={`/edit/${id}`} className="btn-help edit">
          edit
        </Link>
        <h2>{title}</h2>
      </header>
      <main>
        <p>
          <span>Trainer :</span>
          <span>{trainer}</span>
        </p>
        <p>Description :{description}</p>
      </main>
      <footer>
        <span className="date-create">Course Created At :</span>
        <span>
          <strong>{Moment(createdAt).format("MMMM Do YYYY, h:mm:ss a")}</strong>
        </span>
      </footer>
    </div>
  );
};

export default CourseDetails;
