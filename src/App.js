import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Test';

class App extends Component {
	showMe(data) {
		console.log('number 1');
		console.log('data:', data);
	}

	showMe2(data) {
		console.log('number 2');
		console.log('data:', data);
	}

	render() {
		const filters = [
			{
				action: this.showMe,
				array: [{ name: 'Steve', age: 28 }, { name: 'DJ', age: 25 }]
			},
			{
				action: this.showMe2,
				array: [{ name: 'Daria', age: 21 }, { name: 'Maya', age: 18 }]
			}
		];

		return (
			<div className="App">
				<Test filters={filters} />
			</div>
		);
	}
}

export default App;
