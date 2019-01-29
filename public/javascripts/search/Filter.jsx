import React from 'react';
import RadioButton from '../radioInputs/RadioButton';
import './style.less';

const Filter = () => {
	return (
		<div className="filter-container">
			<label >Search by</label>
			<RadioButton
				id="filter-title"
				value="Title"
				name="filter-movie"
				className="button small darkGray input-hide">
				Title
			</RadioButton>
			<RadioButton
				id="filter-title"
				value="Genre"
				name="filter-genre"
				className="button small pink input-hide">
				Genre
			</RadioButton>
		</div>
	);
};

export default Filter;
