import React from 'react';
import { connect } from 'react-redux';
import { filterSearch } from '../../actions';
import RadioButton from '../radioInputs/RadioButton';
import './style.less';

class Filter extends React.Component {
	render() {
		return (
			<div className="filter-container">
				<label >Search by</label>
				<RadioButton
					id="filter-title"
					value="Title"
					name="filter-movie"
					className="button small pink input-hide"
					onClick={() => this.props.filterSearch('title')}>
					Title
				</RadioButton>
				<RadioButton
					id="filter-title"
					value="Genre"
					name="filter-genre"
					className="button small darkGray input-hide"
					onClick={() => this.props.filterSearch('genre')}>
					Genre
				</RadioButton>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		filter: state.filter
	};
};

export default connect(mapStateToProps, {filterSearch})(Filter);
