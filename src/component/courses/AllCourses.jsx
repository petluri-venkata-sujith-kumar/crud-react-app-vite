import {  useEffect, useState } from "react"
import Spinner from './../../pages/spinner/Spinner';
import Course from "./Course";
import courseServices from "../../services/CourseService";
import SearchCourses from './../search/SearchCourses';

const AllCourses = () => {

    let[state,setState]=useState(null)
    let [searchTerm,setSearchTerm]=useState("")
    let fetchCourses=async ()=>{
        // let {data}=await axios.get("http://localhost:5000/courses")
        let data=await courseServices.fetchService()
        // console.log(data);
        setState(data)
    }
    let handleSearch=term=>{
        setSearchTerm(term)
    }
    useEffect(()=>{
        fetchCourses()
    },[])
    let FilteredCourse=state ?.filter(val=>{
        if(searchTerm===""){
            return val
        }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
            return val
        }
    }).map(course=><Course key={course.id} {...course}/>)
  return (
    <section id="allcourses">
        <SearchCourses handleSearch={handleSearch}/>
        <h2>All Courses</h2>
        <div className="course">
            {
                state === null ? <Spinner/> : FilteredCourse
            }
        </div>
    </section>
  )
}

export default AllCourses