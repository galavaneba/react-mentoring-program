import React from 'react';
import './movieStyle.less';

const Movie = props => {
	if(!props.movie ) {
		return <div>No found movie</div>;
	}

	console.log(props);

	const {poster_path, title, tagline, release_date, runtime, overview} = props.movie;

	return (
		<div className="movie-container">
			<div className="movie-poster">
				<img src={poster_path} alt="movie-poster" />
			</div>
			<div className="movie-content">
				<h1 className="movie-title">
					{title}
				</h1>
				<h2 className="movie-subtitle">
					{tagline}
				</h2>
				<div className="movie-metadata">
					<span>{release_date}</span>
					<span>{runtime} min</span>
				</div>
				<div className="movie-description">
					{overview}
				</div>
			</div>
		</div>
	);
};

export default Movie;
