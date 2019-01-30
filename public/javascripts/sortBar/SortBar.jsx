import React from 'react';
import RadioButton from '../radioInputs/RadioButton'
import './style.less';

class SortBar extends React.Component {
	constructor(props) {
		super(props);
	};

	render() {
		return (
			<div className="sort-bar-container">
				<div>
					<div className="sort-bar-results">
						{this.props.results === 0 ? '' : this.props.results + ' movies was found'}
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
	}
}

export default SortBar;
