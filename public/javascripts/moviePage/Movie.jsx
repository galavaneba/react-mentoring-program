import React from 'react';
import './movieStyle.less';

const Movie = props => {
	const {src, title, subtitle, release, runtime, overview} = props;

	return (
		<div className="movie-container">
			<div className="movie-poster">
				<img src={src} alt="movie-poster"/>
			</div>
			<div className="movie-content">
				<h1 className="movie-title">
					{title}
				</h1>
				<h2 className="movie-subtitle">
					{subtitle}
				</h2>
				<div className="movie-metadata">
					<span>{release}</span>
					<span>{runtime}</span>
				</div>
				<div className="movie-description">
					{overview}
				</div>
			</div>
		</div>
	);
};

export default Movie;
