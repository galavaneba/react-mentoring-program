import React from 'react';
import MovieCard from "../movieCard/MovieCard";
import './movieList.less';

const MovieList = (props) => {
	const moviesList = props.movies.map(function ({id, poster_path, title, genres, release_date}) {
		return <MovieCard
			key={id}
			src={poster_path}
			title={title}
			genre={genres}
			released={release_date}
		/>
	});

	console.log(props.movies);

	return (
		<div className="movie-list movie-list-container">
			{moviesList}
		</div>
	);
};

export default MovieList;
