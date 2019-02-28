import React from 'react';
import ReactDOM from 'react-dom';
import { TopPanel } from './components/TopPanel';
import { LeftPanel } from './components/LeftPanel';
import { MainPanel } from './components/MainPanel';
import { BottomPanel } from './components/BottomPanel';
import { Menu } from './components/Menu';
import { messages } from './components/Messages';

class App extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			textToDisplay: ""
		}
	}

	handleClick = value => {
		this.setState({textToDisplay: value})
	}

	render() {
		return (
			<div>
			<TopPanel />
			<div className="mainApp">
				<LeftPanel>
					{messages.map((message, index) => {
						let messageNum = index + 1;
						let textField = "Menu Item " + messageNum;
						return (<Menu key={message.message} text={textField} message={message.message} onClick={this.handleClick}/>);
					})}
				</LeftPanel>
				<MainPanel text={this.state.textToDisplay}/>
			</div>
			<BottomPanel />
			</div>
			);
		}
	
}



ReactDOM.render(<App />, document.getElementById('root'));