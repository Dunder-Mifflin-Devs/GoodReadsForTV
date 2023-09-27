import React from 'react';

const ShowInfo = ({ title = 'Unknown Title', releaseYear = 'Unknown Year', genre = 'Unknown Genre' }) => {
    return (
        <div className="flex flex-col flex-grow">
            <div className="w-96">
                <h1 className="text-5xl font-bold mb-2">{title}</h1>
                <p className="mb-1 text-4xl">Year: {releaseYear}</p>
                <p className="mb-1 text-4xl">Genre: {genre}</p>
            </div>
        </div>
    );
};

export default ShowInfo;