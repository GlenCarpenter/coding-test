import React from 'react';

export class Menu extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			clicked: false
		}
	}

	handleClick = ()=> {
		this.props.onClick(this.props.message);
	}

		render() {
			return (
				<div className="menuItem" onClick={this.handleClick}>
					<h5>{this.props.text}</h5>
					<p>{this.props.message}</p>
				</div>
				)
		}
	}