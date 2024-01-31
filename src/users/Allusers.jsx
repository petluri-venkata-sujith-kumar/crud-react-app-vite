import { useAllUsers } from "../context/UserContext"
import Spinner from "../pages/spinner/Spinner";
import { Link } from 'react-router-dom';

const Allusers = () => {
    let {state:{users,isLoading}}=useAllUsers()
    // console.log(users);
  return (
    <section className="userBlock">
        <article className="container">
            <header>
                <h2>Users</h2>
            </header>
            <main>
                <table>
                    <thead>
                        <tr>
                            <th>photo</th>
                            <th>id</th>
                            <th>name</th>
                            <th>email</th>
                            <th>role</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            isLoading===true ? (<Spinner/>) : users?.map(user=>(
                                <tr>
                                    <td>
                                        <img src={user.avatar} alt={user.name} />
                                    </td>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        <Link to={`/users/${user.id}`} className="user-link">view more</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </main>
        </article>
    </section>
  )
}

export default Allusers