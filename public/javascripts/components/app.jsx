import "@babel/polyfill";
import React from 'react';

import { BrowserRouter, Switch, Route} from "react-router-dom";
import ScrollToTop from './scrollToTop';
import Header from "./header/Header";
import SearchBar from './search/SearchBar';
import SortBar from './sortBar/SortBar';
import Home from "./home/Home";
import MovieList from './movieList/MovieList';
import MoviePage from './moviePage/MoviePage';
import Footer from './footer/Footer';
import '../../stylesheets/style.less';

class App extends React.Component {
	// constructor(props) {
	// 	super(props);
	//
	// 	this.state = {
	// 		movies: [],
	// 	};
	// }

	render() {
		return (
			<BrowserRouter>
				<ScrollToTop>
					<Route
						exact
						path="/"
						component={Home}
					/>
					<Route
						exact
						path="/movie/:id"
						component={MoviePage}
					/>
				</ScrollToTop>
			</BrowserRouter>
		);
	}
}

export default App;
