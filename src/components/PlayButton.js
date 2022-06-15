import React from "react";

const PlayButton = ({ url, useAudio }) => {
    const [playing, toggle] = useAudio(url);

    return (
        <div>
            <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
        </div>
    );

};

export default PlayButton;