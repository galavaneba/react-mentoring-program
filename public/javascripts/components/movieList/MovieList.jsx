import React from 'react';
import { connect } from 'react-redux';
import MovieCard from "../movieCard/MovieCard";
import { fetchMovies, selectMovie } from '../../actions';
import './movieList.less';

class MovieList extends React.Component {
	 moviesList () {
	 	const props = this.props;

	 	return props.moviesList.map(function (movie) {
			return <MovieCard
				key={movie.id}
				id={movie.id}
				src={movie.poster_path}
				title={movie.title}
				genre={movie.genres}
				released={movie.release_date}
				onClick={()=> props.selectMovie(movie)}
			/>

		});
	 }

	 componentDidMount() {
	 	this.props.fetchMovies({searchFilter: 'title', searchTerm: ''});
	 }

	render() {
	 	if(this.props.moviesList.length === 0) {
			return <div className="movie-list movie-list-container">
				<p>
					No found movie
				</p>
			</div>
		}

		return (
			<div className="movie-list movie-list-container">
				{this.moviesList()}
			</div>
		);
	}
}

const mapToStateProps = (state) => {
	return {moviesList: Object.values(state.movies)};
};

export default connect(mapToStateProps, { fetchMovies, selectMovie })(MovieList);


