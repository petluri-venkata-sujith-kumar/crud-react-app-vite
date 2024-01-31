import { useParams,Link } from "react-router-dom";
import { useAllUsers } from "../context/UserContext";
import { useEffect } from "react";
import Spinner from "../pages/spinner/Spinner";
import  Moment from 'moment';
const SingleUser = () => {
  let { fetchSingleUser, state } = useAllUsers();
  let { id } = useParams();
  useEffect(() => {
    fetchSingleUser(id);
  }, [id]);
  console.log(state.singleUser);
  return (
    <>
      {state.singleUser === null ? (
        <Spinner />
      ) : (
        <div className="course-details">
          <header>
            <Link to="/users" className="btn-help back">
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
            <h2>{state?.singleUser?.name}</h2>
          </header>
          <main>
            <p>
              <span>Email :</span>
              <span>{state?.singleUser?.email}</span>
            </p>
            <p>role :{state?.singleUser?.role}</p>
          </main>
          <footer>
            <span className="date-create">Course Created At :</span>
            <span>
              <strong>
                {Moment(state?.singleUser?.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
              </strong>
            </span>
          </footer>
        </div>
      )}
    </>
  );
};

export default SingleUser;
