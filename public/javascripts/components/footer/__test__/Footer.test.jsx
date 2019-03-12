import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../Footer';

it('test footer', () => {
	const div = document.createElement('div');

	ReactDOM.render(<Footer />, div);

	//expect(div.innerText).toContain('Netflixroulette');

	ReactDOM.unmountComponentAtNode(div);
});
