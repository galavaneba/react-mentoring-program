import axios from "axios";
import * as types from './actionTypes';

export const sortMovies = (sortBy) => {
	return {
		type: types.SORTED_MOVIES,
		payload: { sortBy }
	};
};

export const selectMovie = movie => {
	return {
		type: types.SELECTED_MOVIE,
		payload: movie
	}
};

export const fetchCurrentMovie = (movieId = '') => async function (dispatch) {
	const response = await axios.get(`http://react-cdp-api.herokuapp.com/movies/${movieId}`);

	dispatch({
		type: types.SELECTED_MOVIE,
		payload: response.data
	})
};

export const fetchMovies = (params = {searchFilter: 'title', searchTerm: ''}) => async function (dispatch) {
	const response = await axios.get('http://react-cdp-api.herokuapp.com/movies', {
		params: {
			search: params.searchTerm,
			searchBy: params.searchFilter
		}
	});

	dispatch({
		type: types.FETCH_MOVIES,
		payload: response.data.data
	})
};

