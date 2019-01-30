import "@babel/polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SearchBar from './search/SearchBar';
import Header from "./header/Header";
import SortBar from './sortBar/SortBar';
import MovieCard from './movieCard/MovieCard';
import Movie from './moviePage/Movie';
import Footer from './footer/Footer';
import '../stylesheets/style.less';
import MovieList from "./movieList/MovieList";

// class App extends React.Component {
// 	constructor(props) {
// 		super(props);
//
// 		this.state = {
// 			movies: [],
// 		};
// 	}
//
// 	componentWillMount() {
// 		this.searchMovies();
// 	}
//
// 	async searchMovies() {
// 		 const resp = await axios.get('http://react-cdp-api.herokuapp.com/movies', {
// 			params: {
// 				searchBy: 'genre'
// 			}
// 		});
//
// 		 console.log(resp);
// 		this.setState({movies: resp.data.data});
// 	}
//
// 	render() {
// 		return (
// 			<div>
// 				<div className="header-wrapper">
// 					<Header />
// 					<Movie />
// 				</div>
//
// 				<Footer />
// 			</div>
// 		);
// 	}
// }

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			movies: [],
		};
	}

	async onSearchSubmit(term) {
		const response = await axios.get('http://react-cdp-api.herokuapp.com/movies', {
			params: {
				search: term,
				searchBy: 'genre'
			}
		});

		this.setState({movies: response.data.data});
	}

	render() {
		return (
			<div>
				<div className="header-wrapper">
					<Header />
					<SearchBar onSubmit={e => this.onSearchSubmit(e)}/>
				</div>
				<SortBar results={this.state.movies.length}/>
				<MovieList movies={this.state.movies}/>
				<Footer />
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);



