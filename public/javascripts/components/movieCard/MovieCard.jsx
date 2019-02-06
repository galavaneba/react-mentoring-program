import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './movieCard.less';

class MovieCard extends React.Component {
	onClick = () => {
		this.props.onClick();
	};

	render() {
		const {src, title, genre, released} = this.props;

		return (
			<div className="movie-card">
				<Link to={`/movie`} >
					<img src={src} alt="poster" />
				</Link>
				<div className="movie-title"
					 onClick={this.onClick}
				>
					{title}
				</div>
				<div className="movie-genre">
					{genre}
				</div>
				<div className="movie-release">
					{released}
				</div>
			</div>
		);
	};
};

const mapStateToProps = (state) => {
	return {
		selectedMovie: state.movie
	};
};

export default connect(mapStateToProps)(MovieCard);
