import React from 'react';
import { connect } from 'react-redux';
import MovieCard from "../movieCard/MovieCard";
import { fetchMovies, selectMovie } from '../../actions';
import './movieList.less'

class MovieList extends React.Component {
	 moviesList () {
	 	const props = this.props;

	 	return this.props.movies.map(function (movie) {
			return <MovieCard
				key={movie.id}
				src={movie.poster_path}
				title={movie.title}
				genre={movie.genres}
				released={movie.release_date}
				onClick={()=> props.selectMovie(movie)}
			/>
		});
	 }

	 componentDidMount() {
	 	this.props.fetchMovies('');
	 }

	render() {
	 	if(!this.props.movies) {
			return <div> Loading... </div>
		}

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

export default connect(mapToStateProps, { fetchMovies, selectMovie })(MovieList);


