import React from 'react';
import './movieCard.less';

const MovieCard = props => {
	const {src, title, genre, released} = props;

	return (
		<div className="movie-card">
			<a href="/">
				<img src={src} alt="poster" />
			</a>
			<div className="movie-title">
				{title}
			</div>
			<div className="movie-genre">
				{genre}
			</div>
			<div className="movie-release">
				{released}
			</div>
		</div>
	);
};

export default MovieCard;
