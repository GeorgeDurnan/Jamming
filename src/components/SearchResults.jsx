import React, { useState } from "react"
import { result } from "../assets/exampleData"
import Tracklist from "./Tracklist"
function SearchResults(props) {

    return (
        <Tracklist data = {result} changeTrack = {props.changeTrack} add = {true}/>

    )
}
export default SearchResults