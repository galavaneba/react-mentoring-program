import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SearchBar from './search/SearchBar';
import Header from "./header/Header";
import SortBar from './sortBar/SortBar';
import MovieCard from './movieCard/MovieCard';
// import Movie from './moviePage/Movie';
// import MovieList from './movieList/MovieList';
import Footer from './footer/Footer';
import '../stylesheets/style.less';

// const App = () => {
// 	return (
// 		<div>
// 			<div className="header-wrapper">
// 				<Header />
// 				<Movie />
// 			</div>
// 			<MovieList />
// 			<Footer />
// 		</div>
// 	);
// };

class App extends React.Component {
	onSearchSubmit(term) {
		axios.get('/http://react-cdp-api.herokuapp.com/movies', {
			params: {
				query: term
			}
		});
	}

	render() {
		return (
			<div>
				<Header />
				<SearchBar onSubmit={this.onSearchSubmit}/>
				<SortBar />
				<div className="movie-list movie-list-container">
					<MovieCard
						title="Jackie Brown"
						genre="drama"
						released="2014"
					/>
					<MovieCard
						title="One Night"
						genre="comedy"
						released="2015"
					/>
					<MovieCard
						title="Sex in the city"
						genre="fantasy"
						released="2006"
					/>
					<MovieCard
						title="Jango"
						genre="travel"
						released="2012"
					/>
				</div>
				<Footer />
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);



