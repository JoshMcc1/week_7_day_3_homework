import React from "react";
import Title from "../components/Title";
import ITunesList from "../components/ITunesList";
import { useEffect, useState } from 'react';
import GenreSelect from "../components/GenreSelect";

const ITunesBox = () => {
    const [songs, setSongs] = useState([]);

    const [genres, setGenres] = useState([{ name: "All", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/json" },
    { name: "Rock", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json" },
    { name: "Dance", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=17/json" },
    { name: "Country", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json" }]);

    const [selectedGenre, setSelectedGenre] = useState(null);

    useEffect(() => { fetchSongs("https://itunes.apple.com/gb/rss/topsongs/limit=20/json") }, []);

    const onGenreSelected = (genre) => {
        setSelectedGenre(genre);
        fetchSongs(genre.url);

    }
    const useAudio = (url) => {
        const [audio] = useState(new Audio(url));
        const [playing, setPlaying] = useState(false);

        const toggle = () => setPlaying(!playing);

        useEffect(() => {
            playing ? audio.play() : audio.pause();
        },
            [playing]
        );

        useEffect(() => {
            audio.addEventListener('ended', () => setPlaying(false));
            return () => {
                audio.removeEventListener('ended', () => setPlaying(false));
            };
        }, []);

        return [playing, toggle];

    }

    const fetchSongs = function (url) {
        fetch(url).then(res => res.json()).then(songs => setSongs(songs.feed.entry)).catch(ex => { console.log(ex) });
    }
    return (
        <>
            <Title title="ITunes Top 20 List" />
            <hr />
            <GenreSelect genres={genres} onGenreSelected={onGenreSelected} />
            <hr />
            <ITunesList songs={songs} useAudio={useAudio} />
        </>
    );
}

export default ITunesBox;