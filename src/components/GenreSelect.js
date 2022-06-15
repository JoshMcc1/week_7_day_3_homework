import React from "react";

const GenreSelect = ({ genres, onGenreSelected }) => {
    const handleSelect = (event) => {
        const chosenIndex = event.target.value;
        const chosenGenre = genres[chosenIndex];
        onGenreSelected(chosenGenre);
    }

    const getGenres = genres.map((genre, index) => {
        return <option key={index} value={index}>{genre.name}</option>
    })
    return (
        <>
            <select onChange={handleSelect}>
                {getGenres}
            </select>
        </>);
};

export default GenreSelect;