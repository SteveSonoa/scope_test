import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Test extends Component {
	doIt(data, func) {
		console.log(data);
		func(data);
		// this.props.filters[0].action('123');
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">TEST.JS</h1>
				</header>
				{this.props.filters.map(customFilter =>
					customFilter.array.map(item => (
						// <button onClick={() => customFilter.action(item)}>
						<button onClick={() => this.doIt(item, customFilter.action)}>
							{/* {console.log(item)} */}
							{item.name}
						</button>
					))
				)}

				{/* {this.props.filters[0].action(this.props.filters[0].array[0])} */}
			</div>
		);
	}
}

export default Test;
