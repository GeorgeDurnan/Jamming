import React from "react"
function Track(props) {
    let sign = ""
    if (props.add) {
        sign = "+"
    } else if (!props.add) {
        sign = "-"
    }
    function handleClick() {


        if (props.add) {
            const song = {
                title: props.title,
                artist: props.artist,
                album: props.album,
                id: crypto.randomUUID()

            }
            props.changeTrack((prev) => [...prev, song])
        } else {
            props.changeTrack((prev) => prev.filter((item) => item.id !== props.id)
            )
        }
    }


    return (
        <div>
            <h2>{props.title}</h2>
            <h2>{props.artist}</h2>
            <h2>{props.album}</h2>
            <button onClick={handleClick}>{sign}</button>
        </div>
    )
}
export default Track
