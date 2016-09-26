import React, {Component} from 'react';
import KanbanBoard from './KanbanBoard';

const API_URL = 'http://kanbanapi.pro-react.com';
const API_HEADERS = {
	'Content-Type': 'application/json',
	Authorization: 'fetch-Data'
}

export default class KanbanBoardContainer extends Component {
	constructor() {
		super(); 
		this.state = {
			cards: []
		}
	}
	
	componentDidMount() {
		fetch(API_URL + '/cards', {headers: API_HEADERS})
			.then((res) => res.json())
			.then((resData) => {this.setState({cards: resData});
			})
			.catch((error) => {
				console.log('Error fetching and parsing data', error);
			})
	}

	render() {
		return <KanbanBoard cards = {this.state.cards}/>
	}
}