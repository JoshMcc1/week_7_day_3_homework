import React from "react";
import ITunesSong from "./ITunesSong";

const ITunesList = ({ songs, useAudio }) => {
    const getSongs = songs.map((song, index) => {
        return <ITunesSong song={song} useAudio={useAudio} key={index} />
    })

    return (
        <>
            <ol>
                {getSongs}
            </ol>
        </>
    );
}

export default ITunesList;