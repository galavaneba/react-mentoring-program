import React from 'react';
import './style.less';

const Filter = props => {
	const {input, type, label, className, id , checked, name} = props;

	return (
		<div className="radio-wrapper" >
			<label className={className}>
				{label}

				<input
					{...input}
					type={type}
					id={id}
					name={name}
				/>
			</label>
		</div>
	);
};

export default Filter;
