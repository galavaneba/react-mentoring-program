import "@babel/polyfill";
import React from 'react';
import axios from 'axios';
import ErrorBoundary from './errorBondary/ErrorBoundary';
import Header from "./header/Header";
import Footer from './footer/Footer';
import SearchBar from './search/SearchBar';
import SortBar from './sortBar/SortBar';
import MovieList from './movieList/MovieList';
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

	componentDidMount() {
		this.onSearchSubmit('');
	}

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

					<SortBar />

					<ErrorBoundary>
						<MovieList />
					</ErrorBoundary>

					<Footer />
				</ErrorBoundary>
			</div>
		);
	}
}

export default App;
