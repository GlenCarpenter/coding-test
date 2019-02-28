import React from 'react';

export class ColorButton extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			color: ''
		}
	}

	handleOnChange = event => {
		this.props.onChange({ color: event.target.value });
	}

	render() {
		return (
			<div>
				<input
					type="color"
					className="color-field"
					onChange={this.handleOnChange}>
				</input>
			    <label htmlFor="color-field">Select Background Color</label>
			</div>
			);
	}
}

// onchange={this.handleOnChange('#fff')}