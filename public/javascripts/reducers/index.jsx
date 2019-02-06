import { combineReducers } from 'redux';

const filteredSearchReducer = (filter = 'title', action) => {
	if (action.type === 'FILTERED_SEARCH') {
		return action.payload.filter;
	}

	return filter;
};

const sortedByReducer = (sortBy = null, action) => {
	if (action.type === 'SORTED_MOVIES') {
		return action.payload.sortBy;
	}

	return sortBy;
};

const moviesReducer = (state = [], action) => {
	switch (action.type) {
		case 'FETCH_MOVIES':
			return action.payload;
		default:
			return state;
	}
};

export default combineReducers({
	movies: moviesReducer,
	searchBy: filteredSearchReducer,
	sortBy: sortedByReducer
});
