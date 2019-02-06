import "@babel/polyfill";
import React from 'react';
import axios from 'axios';
import ErrorBoundary from './errorBondary/ErrorBoundary';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Header from "./header/Header";
import SearchBar from './search/SearchBar';
import SortBar from './sortBar/SortBar';
import Movie from "./moviePage/Movie";
import MovieList from './movieList/MovieList';
import Footer from './footer/Footer';
import '../../stylesheets/style.less';

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
				searchBy: 'title'
			}
		});

		this.setState({movies: response.data.data});
	};

	render() {
		return (
			<div>
				<BrowserRouter>
					<div>
						<ErrorBoundary>
							<div className="header-wrapper">
								<Header />

								<ErrorBoundary>
									<Switch>
										<Route
											exact
											path="/"
											component={() => <SearchBar onSubmit={e => this.onSearchSubmit(e)}/>}
										/>
										<Route
											exact
											path="/movie"
											component={() => <Movie/>}
										/>
										<Movie />
									</Switch>
								</ErrorBoundary>
							</div>

							<SortBar />

							<ErrorBoundary>
								<MovieList />
							</ErrorBoundary>

							<Footer />
						</ErrorBoundary>
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
