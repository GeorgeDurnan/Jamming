import React,{useState} from "react"

import SearchBar from './components/SearchBar';
import './App.css';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
function App() {
  const [tracks, addTrack] = useState([])
  return (
    <div>
      <SearchBar />
      <SearchResults changeTrack = {addTrack}/>
      <Playlist changeTrack = {addTrack} tracks = {tracks}/>
    </div>
  );
}

export default App;
