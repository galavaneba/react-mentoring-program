import "@babel/polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ErrorBoundary from './errorBondary/ErrorBoundary';
import Header from "./header/Header";
import SearchBar from './search/SearchBar';
import SortBar from './sortBar/SortBar';
import MovieList from "./movieList/MovieList";
import Footer from './footer/Footer';
import '../stylesheets/style.less';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			movies: [],
		};
	}

	 onSearchSubmit = async term => {
		const response = await axios.get('http://react-cdp-api.herokuapp.com/movies', {
			params: {
				search: term,
				searchBy: 'genre'
			}
		});

		this.setState({movies: response.data.data});
	};

	render() {
		return (
			<div>
				<ErrorBoundary>
					<div className="header-wrapper">
						<Header />
						<ErrorBoundary>
							<SearchBar onSubmit={e => this.onSearchSubmit(e)}/>
						</ErrorBoundary>
					</div>

					<SortBar results={this.state.movies.length}/>
					<ErrorBoundary>
						<MovieList movies={this.state.movies}/>
					</ErrorBoundary>
					<Footer />
				</ErrorBoundary>
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);



