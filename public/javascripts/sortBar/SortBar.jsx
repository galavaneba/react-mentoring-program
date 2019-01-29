import React from 'react';
import RadioButton from '../radioInputs/RadioButton'
import './style.less';

const SortBar = () => {
	return (
		<div className="sort-bar-container">
			<div>
				<div className="sort-bar-results">
					Results placeholder
				</div>
				<div className="sort-items">
					<span>Sort by</span>
					<RadioButton
						id="release"
						value="release"
						name="sort"
						className="none input-hide">
						released date
					</RadioButton>
					<RadioButton
						id="rating"
						value="rating"
						name="sort"
						className="none input-hide">
						rating
					</RadioButton>
				</div>
			</div>
		</div>
	);
};

export default SortBar;
