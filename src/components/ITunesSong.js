import React from "react";
import PlayButton from "./PlayButton";

const ITunesSong = ({ song, useAudio }) => {
    // song.link.attributes.href

    return (
        <li>
            {song.title.label} <PlayButton url={song.link[1].attributes.href} useAudio={useAudio} />
        </li>
    );
}

export default ITunesSong;