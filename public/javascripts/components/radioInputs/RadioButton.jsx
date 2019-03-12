import React from 'react';
import PropTypes from 'prop-types';
import './RadioButtom.less';
// import classNames from 'classnames';

class RadioButton extends React.PureComponent {
	onClick = () => {
		this.props.onClick();
	};

	render() {
		const {disabled, label, className, id, value, name} = this.props;

		return (
			<div className="radio-wrapper" >
				<input
					type="radio"
					id={id}
					value={value}
					name={name}
					disabled={disabled}
				/>
				<label htmlFor={id}
					   className={className}
					   onClick={this.onClick}>
					{label}
				</label>

			</div>
		);
	}
}

RadioButton.propTypes = {
	id: PropTypes.string,
	disabled: PropTypes.bool,
	label: PropTypes.string,
	className: PropTypes.string,
	value: PropTypes.string,
	name: PropTypes.string
	// onClick: PropTypes.func
};

RadioButton.defaultProps = {
	id: '',
	disabled: false,
	label: '',
	className: '',
	name: '',
	value: ''
	// onClick() {
	// }
};
export default RadioButton;
