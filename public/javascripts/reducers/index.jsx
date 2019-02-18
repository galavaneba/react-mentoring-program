import _ from 'lodash';
import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';

const sortedByReducer = (sortBy = null, action) => {
	if (action.type === 'SORTED_MOVIES') {
		return action.payload.sortBy;
	}

	return sortBy;
};

const moviesReducer = (state = {}, action) => {
	switch (action.type) {
		case 'FETCH_MOVIES':
			return {..._.keyBy(action.payload, 'id')};
		default:
			return state;
	}
};

const movieSelectReducer = (state = null, action) => {
	switch (action.type) {
		case 'SELECTED_MOVIE':
			return action.payload;
		default:
			return state;
	}
};

export default combineReducers({
	movies: moviesReducer,
	sortBy: sortedByReducer,
	selectedMovie: movieSelectReducer,
	form: formReducer
});
