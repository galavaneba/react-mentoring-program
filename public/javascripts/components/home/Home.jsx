import React from 'react';
import ErrorBoundary from '../errorBondary/ErrorBoundary';
import Header from "../header/Header";
import SearchBar from "../search/SearchBar";
import SortBar from "../sortBar/SortBar";
import MovieList from "../movieList/MovieList";
import Footer from '../footer/Footer';

const Home = props => {
	return (
		<div>
			<div className="header-wrapper">
				<Header />
				<ErrorBoundary>
					<SearchBar />
				</ErrorBoundary>
			</div>
			<SortBar />
			<ErrorBoundary>
				<MovieList />
			</ErrorBoundary>
			<Footer />
		</div>
	);
};

export default Home;
