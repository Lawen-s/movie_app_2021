import React from "react";
import { Link } from "react-router-dom";
import ProtoTypes from "prop-types";
import "./Movies.css";

function Movie({ id, year, title, summary, poster, genres }) {
    return (
        <Link to={{
            pathname: "/movie-detail",
            state: {
                year,
                title,
                summary,
                poster,
                genres
            }
        }}>
            <div className="movie">
                <img src={poster} alt={title} title={title} />
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className="movie__genres">{genres.map((genre, index) => <li key={index} className="genres__genre">{genre}</li>)}</ul>
                    <p className="movie__summary">{summary.slice(0, 150)}...</p>
                </div>
            </div>
        </Link>
    )
}

Movie.protoTypes = {

    id: ProtoTypes.number.isRequired,
    year: ProtoTypes.number.isRequired,
    title: ProtoTypes.string.isRequired,
    summary: ProtoTypes.string.isRequired,
    poster: ProtoTypes.string.isRequired,
    genres: ProtoTypes.arrayOf(ProtoTypes.string).isRequired
};

export default Movie;