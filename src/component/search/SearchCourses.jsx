import { MdOutlineSearch } from "react-icons/md";
const SearchCourses = ({handleSearch}) => {
  return (
    <div className="searchBlock">
      <span>
        <input type="text" name="" id="" placeholder="search courses..." onInput={e=>{
            handleSearch(e.target.value)
        }}/>
      </span>
      <span className="searchIcon">
        <MdOutlineSearch />
      </span>
    </div>
  );
};

export default SearchCourses;
