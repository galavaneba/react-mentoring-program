import React from 'react';
import './movieCard.less';

const MovieCard = props => {
	return (
		<div className="movie-card">
			<a href="/">
				<img alt="movie-poster" />
			</a>
			<div className="movie-title">
				{props.title}
			</div>
			<div className="movie-genre">
				{props.genre}
			</div>
			<div className="movie-release">
				{props.released}
			</div>
		</div>
	);
};

export default MovieCard;
