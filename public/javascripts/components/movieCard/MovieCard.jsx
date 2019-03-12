import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import './movieCard.less';

class MovieCard extends React.Component {
	onClick = () => {
		this.props.onClick();
	};

	render() {
		const {src, id, title, genre, released} = this.props;

		return (
			<div className="movie-card">
				<Link to={`/movie/${id}`}
					  onClick={this.onClick}>
					<img src={src} alt="poster" />
				</Link>
				<div className="movie-card-info">
					<div className="movie-title">
						{title}
					</div>
					<div className="movie-genre">
						{genre.join(', ')}
					</div>
					<div className="movie-release">
						<Moment date={released} format="YYYY"/>
					</div>

				</div>
			</div>
		);
	};
}

export default MovieCard;
