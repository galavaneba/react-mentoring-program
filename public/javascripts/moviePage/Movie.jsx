import React from 'react';
import './movieStyle.less';

const Movie = () => {
	return (
		<div className="movie-container">
			<div className="movie-poster">
				<img src="" alt="movie-poster"/>
			</div>
			<div className="movie-content">
				<h1 className="movie-title">
					Pulp Fiction
				</h1>
				<h2 className="movie-subtitle">
					Oscar-winning movie
				</h2>
				<div className="movie-metadata">
					<span>1994</span>
					<span>154 min</span>
				</div>
				<div className="movie-description">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
					when an unknown printer took a galley of type and scrambled it to make a type
					specimen book. It has survived not only five centuries, but also the leap into electronic typesetting
				</div>
			</div>
		</div>
	);
};

export default Movie;
