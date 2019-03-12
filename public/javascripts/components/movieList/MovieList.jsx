import React from 'react';
import { connect } from 'react-redux';
import LazyLoad from 'react-lazyload';
import MovieCard from "../movieCard/MovieCard";
import { fetchMovies, selectMovie } from '../../actions';
import './movieList.less';
import _ from "lodash";

class MovieList extends React.Component {
	compareRating(a, b) {
		return a.vote_average - b.vote_average;
	}

	compareReleaseDate(a, b) {
		let date1 = new Date(a.release_date);
		let date2 = new Date(b.release_date);

		if (date1.getTime() > date2.getTime()) {
			return 1;
		} else if (date1.getTime() < date2.getTime()) {
			return -1;
		} else {
			return 0;
		}
	}

	getSortedMovieList(func) {
		let sortedList = this.props.moviesList.sort(func);

		return _.reverse(sortedList);
	}

	sortMovieList() {
		switch (this.props.sortBy) {
			case 'rating':
				return this.getSortedMovieList(this.compareRating);
			case 'release':
				return this.getSortedMovieList(this.compareReleaseDate);
			default:
				return Object.values(this.props.moviesList);
		}
	}

	moviesList () {
		const props = this.props;
		let movieList = this.sortMovieList();

		return movieList.map(function (movie) {
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
			return <div className="movie-list movie-list-container">No found movie</div>
		}

		return (
			<div className="movie-list movie-list-container">
				<LazyLoad height={200} offset={100}>
					{this.moviesList()}
				</LazyLoad>
			</div>
		);
	}
}

const mapToStateProps = (state) => {
	return {
		moviesList: state.movies,
		sortBy: state.sortBy
	};
};

export default connect(mapToStateProps, { fetchMovies, selectMovie })(MovieList);


