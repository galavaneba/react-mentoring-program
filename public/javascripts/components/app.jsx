import "@babel/polyfill";
import React from 'react';

import { BrowserRouter, Route} from "react-router-dom";
import ScrollToTop from './scrollToTop';
import Home from "./home/Home";
import MoviePage from './moviePage/MoviePage';
import '../../stylesheets/style.less';

class App extends React.Component {
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
