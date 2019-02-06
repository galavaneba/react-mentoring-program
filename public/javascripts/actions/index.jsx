import axios from "axios";

export const searchMovies = term => {
	return {
		type: 'SEARCHED_MOVIES',
		payload: { term }
	}
};

export const filterSearch = (filter) => {
	return {
		type: 'FILTERED_SEARCH',
		payload: { filter }
	};
};

export const sortMovies = (sortBy) => {
	return {
		type: 'SORTED_MOVIES',
		payload: { sortBy }
	};
};

export const selectMovie = movie => {
	return {
		type: 'SELECTED_MOVIE',
		payload: movie
	}
};

export const fetchMovies = term => async function (dispatch) {
	const response = await axios.get('http://react-cdp-api.herokuapp.com/movies', {
		params: {
			search: term,
			searchBy: 'title'
		}
	});

	dispatch({
		type: 'FETCH_MOVIES',
		payload: response.data.data
	})
};

