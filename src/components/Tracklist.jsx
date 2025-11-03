import React, { useState, useID } from "react"
import Track from "./Track"
function Tracklist(props) {
    if(!props.data || props.data.length == 0 ){
        return(
            <>
            </>
        )
    }
    const data = props.data
    const amount = Math.min(data.length, 10)
    let songs = data.slice(0, amount)
    return (
        <div>
            {
                songs.map((track, i) => (
                    <Track id = {track.id} key={i} title={track.title} artist={track.artist} album={track.album} changeTrack = {props.changeTrack} add = {props.add}/>
                ))
            }
        </div>
    )
}
export default Tracklist