import React from 'react';
import { connect } from 'react-redux';
import MovieCard from "../movieCard/MovieCard";
import { fetchMovies } from '../../actions';
import './movieList.less'

class MovieList extends React.Component {
	 moviesList () {
	 	return this.props.movies.map(function ({id, poster_path, title, genres, release_date}) {
			return <MovieCard
				key={id}
				src={poster_path}
				title={title}
				genre={genres}
				released={release_date}
			/>
		});
	 }

	 componentDidMount() {
	 	this.props.fetchMovies('');
	 }

	render() {
		return (
			<div className="movie-list movie-list-container">
				{this.moviesList()}
			</div>
		);
	}
}

const mapToStateProps = (state) => {
	return {movies: state.movies};
};

export default connect(mapToStateProps, { fetchMovies })(MovieList);


