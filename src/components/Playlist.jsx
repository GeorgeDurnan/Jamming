import React, { useState } from "react"
import Tracklist from "./Tracklist"
function Playlist(props) {
    const [name, setName] = useState()
    function handleClick() {
        props.changeTrack([])
    }
    function handleChange(event){
        setName(event.target.value)
    }
    return (
        <div>
            <h1>Playlist</h1>
                <input type ="text" value = {name} onChange = {handleChange}></input>
                <Tracklist data={props.tracks} changeTrack={props.changeTrack} add={false} />
                <button onClick={handleClick}>Add to Spotify</button>
        </div>
    )
}
export default Playlist