import React from 'react';
import { ColorButton } from './ColorButton';

export class MainPanel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			backgroundColor: 'white'
			}
		}

	handleOnChange = newColor => {
		this.setState({backgroundColor: newColor.color});
	}

	render() {
		return (
			<div className="mainPanel" style={{backgroundColor: this.state.backgroundColor}}>
				<div>
					<ColorButton onChange={this.handleOnChange} />
				</div>
				<div>
					<h1>{this.props.text}</h1>
				</div>
			</div>
			)
	}
	
}