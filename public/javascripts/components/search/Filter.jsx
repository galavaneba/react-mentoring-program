import React from 'react';
import './style.less';

const Filter = props => {
	const {input, type, label, className, id , name} = props;

	return (
		<div className="radio-wrapper" >
			<input
				{...input}
				type={type}
				id={id}
				name={name}
			/>
			<label className={className} htmlFor={id}>
				{label}
			</label>
		</div>
	);
};

export default Filter;
