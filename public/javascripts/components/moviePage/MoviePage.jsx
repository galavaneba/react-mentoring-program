import React from 'react';
import ErrorBoundary from '../errorBondary/ErrorBoundary';
import { connect } from 'react-redux';
import { fetchCurrentMovie } from "../../actions";
import Movie from "./Movie";
import SortBar from '../sortBar/SortBar';
import MovieList from '../movieList/MovieList';
import Header from "../header/Header";
import Footer from "../footer/Footer";

class MoviePage extends React.Component {
	componentDidMount() {
		const movieId = this.props.match.params.id;

		this.props.fetchCurrentMovie(movieId);
	};


	render () {
		return (
			<div>
				<div className="header-wrapper">
					<Header/>
					<ErrorBoundary>
						<Movie movie={this.props.selectedMovie}/>
					</ErrorBoundary>
				</div>
				<ErrorBoundary>
					<SortBar/>
					<MovieList/>
				</ErrorBoundary>
				<Footer/>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	console.log(state);
	console.log(ownProps);

	return {
		selectedMovie: state.selectedMovie
	}
};

export default connect(mapStateToProps, {fetchCurrentMovie})(MoviePage);
