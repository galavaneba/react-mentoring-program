import React from 'react';
import MovieCard from "../movieCard/MovieCard";

class MovieList extends React.Component {

	render() {
		// const {disabled, children, className, id, value, name} = this.props;

		return (
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
		);
	}
}

// RadioButton.propTypes = {
// 	id: PropTypes.string,
// 	disabled: PropTypes.bool,
// 	children: PropTypes.node.isRequired,
// 	className: PropTypes.string,
// 	value: PropTypes.string,
// 	name: PropTypes.string
// 	// onClick: PropTypes.func
// };
//
// RadioButton.defaultProps = {
// 	id: '',
// 	disabled: false,
// 	className: '',
// 	name: '',
// 	value: ''
// 	// onClick() {
// 	// }
// };
export default MovieList;
