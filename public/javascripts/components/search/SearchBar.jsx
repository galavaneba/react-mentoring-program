import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { fetchMovies } from "../../actions";
import Filter from './Filter';
import './style.less';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);

		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(formValues) {
		const filter = formValues.searchFilter ? formValues.searchFilter : 'title';
		const params = {...formValues, 'searchFilter': filter};

		this.props.fetchMovies(params);
	};

	renderInput({ input, label, id, className, type }) {
		return (
			<label htmlFor={id}>
				{label}
				<input
					{...input}
					type={type}
					id={id}
					className={className}
					placeholder={label}
					autoComplete="off"
					/>
			</label>
		);
	};

	render() {
		return (
			<div className="search-container">
				<form className="search-form"
					onSubmit={this.props.handleSubmit(this.onSubmit)}>
					<Field name="searchTerm"
						   component={this.renderInput}
						   label="Find your movie"
						   id="search-bar"
						   className="search-bar"
						   type="text"/>

					<button className="button pink large" type="submit">Search</button>
					<div className="filter-container">
						<p>Search by</p>
						<Field name="searchFilter"
							   component={Filter}
							   label="Title"
							   id="filter-title"
							   value="title"
							   type="radio"
							   className="button small pink input-hide"
						/>
						<Field name="searchFilter"
							   component={Filter}
							   label="Genre"
							   id="filter-title"
							   value="genres"
							   type="radio"
							   className="button small darkGray input-hide"
						/>
					</div>
				</form>
			</div>
		);
	};
}

const formWrapped = reduxForm({
	form: 'searchMovie'
})(SearchBar);

export default connect(null, { fetchMovies })(formWrapped);
