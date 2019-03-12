import React from 'react';
import { connect } from 'react-redux';
import RadioButton from '../radioInputs/RadioButton';
import { sortMovies } from "../../actions";
import './style.less';

class SortBar extends React.Component {

	render() {
		//this.getMovieListByRating();
		return (
			<div className="sort-bar-container">
				<div>
					<div className="sort-bar-results">
						{this.props.movies.length === 0 ? '' : this.props.movies.length + ' movies was found'}
					</div>
					<div className="sort-items input-hide">
						<span>Sort by</span>
						<RadioButton
							id="release"
							value="release"
							name="sort"
							label="released date"
							className="none"
							onClick={() => this.props.sortMovies('release')}>
						</RadioButton>
						<RadioButton
							id="rating"
							value="rating"
							name="sort"
							label="rating"
							className="none"
							onClick={() => this.props.sortMovies('rating')}>
						</RadioButton>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		movies: Object.values(state.movies),
		sortBy: state.sortBy
	};
};

export default connect(mapStateToProps, {sortMovies})(SortBar);
