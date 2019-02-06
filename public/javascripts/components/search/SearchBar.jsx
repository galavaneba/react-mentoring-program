import React from 'react';
import Filter from './Filter';
import './style.less';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {term: ''};
	}

	onFormSubmit(e){
		e.preventDefault();
		this.props.onSubmit(this.state.term);
	};

	render() {
		return (
			<div className="search-container">
				<form onSubmit={(e) => this.onFormSubmit(e)}
					className="search-form">
					<label htmlFor="search-bar">Find your movie</label>
					<input type="text"
						   id="search-bar"
						   className="search-bar"
						   placeholder="Find movie"
						   value={this.state.term}
						   onChange={(e) => this.setState({term: e.target.value})}
					/>
					<button className="button pink large" type="submit">Search</button>
					<Filter />
				</form>
			</div>
		);
	};
}

export default SearchBar;
