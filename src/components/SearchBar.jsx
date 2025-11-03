import React, {useState} from "react";
function SearchBar(){
    const [search, setSearch] = useState("")
    function handleSubmit(event){
        event.preventDefault()
        
    }
    function handleChange(event){
        setSearch(event.target.value)

    }
    return(
        <form onSubmit = {handleSubmit}>
            <input type = "text" onChange = {handleChange} value = {search}></input>
            <button type = "submit">Search</button>
        </form>
    )
}
export default SearchBar