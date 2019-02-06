import React from 'react';
import { connect } from 'react-redux';
import RadioButton from '../radioInputs/RadioButton';
import { sortMovies } from "../../actions";
import './style.less';

class SortBar extends React.Component {
	render() {
		return (
			<div className="sort-bar-container">
				<div>
					<div className="sort-bar-results">
						{this.props.movies.length === 0 ? '' : this.props.movies.length + ' movies was found'}
					</div>
					<div className="sort-items">
						<span>Sort by</span>
						<RadioButton
							id="release"
							value="release"
							name="sort"
							className="none input-hide"
							onClick={() => this.props.sortMovies('release')}>
							released date
						</RadioButton>
						<RadioButton
							id="rating"
							value="rating"
							name="sort"
							className="none input-hide"
							onClick={() => this.props.sortMovies('rating')}>
							rating
						</RadioButton>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		movies: state.movies,
		sortBy: state.sortBy
	};
};

export default connect(mapStateToProps, {sortMovies})(SortBar);
