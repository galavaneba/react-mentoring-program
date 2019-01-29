import React from 'react';
import PropTypes from 'prop-types';
import './RadioButtom.less';
// import classNames from 'classnames';

class RadioButton extends React.PureComponent {
	// onClick = () => {
	// 	if (!this.props.disabled) {
	// 		this.props.onClick();
	// 	}
	// };

	render() {
		const {disabled, children, className, id, value, name} = this.props;

		return (
			<div className="radio-wrapper">
				<label htmlFor={id}
					   className={className}>
					{children}
				</label>
				<input
					type="radio"
					id={id}
					value={value}
					name={name}
					disabled={disabled}
					// onClick={this.onClick}
				 />
			</div>
		);
	}
}

RadioButton.propTypes = {
	id: PropTypes.string,
	disabled: PropTypes.bool,
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	value: PropTypes.string,
	name: PropTypes.string
	// onClick: PropTypes.func
};

RadioButton.defaultProps = {
	id: '',
	disabled: false,
	className: '',
	name: '',
	value: ''
	// onClick() {
	// }
};
export default RadioButton;
