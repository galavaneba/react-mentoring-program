import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from '../googleAuth/GoogleAuth';

const Header = () => {
	return (
		<header className="header">
			<Link to='/'>Netflixroulette</Link>
		</header>
	);
};

export default Header;
