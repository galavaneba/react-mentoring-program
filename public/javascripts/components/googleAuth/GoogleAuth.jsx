import React from 'react';
import { connect } from 'react-redux';

class GoogleAuth extends React.Component {

	componentDidMount() {
		// gapi.init({
		// 	clientId: '647797111924-4ig7klufr8pestii70r7hfsalt686m3u.apps.googleusercontent.com',
		// 	scopes: 'email'
		// });
	}

	render() {
		return (
			<div>
				<button className="pink button small">
					Log in
				</button>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {

	}
};

export default connect(mapStateToProps)(GoogleAuth);
