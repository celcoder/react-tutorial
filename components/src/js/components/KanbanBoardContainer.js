import React, {Component} from 'react';
import update from 'react-addons-update';
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
			.then((resData) => {
				this.setState({cards: resData});
				window.state = this.state;
			});
	}

	addTask(cardId, taskName) {
		//in case you need to rever the optimistic changes in the UI
		let prevState = this.state;
		let cardIndex = this.state.cards.findIndex((card) => card.id == cardId);
		//create a new task with the given name and a temporary ID
		let newTask = {id: Date.now(), name: taskName, done: false}
		//create a new object and push the new task to the array of tasks
		let nextState = update(this.state.cards, {
			[cardIndex]: {
				tasks: {$push: [newTask]}
			}
		})
		
		this.setState({cards: nextState});
	
		fetch(`${API_URL}/cards/${cardId}/tasks`, {
			method: 'post',
			headers: API_HEADERS,
			body: JSON.stringify(newTask)
		})
		.then((res) => {
			if(res.ok) {return res.json();}
			else {throw new Error('Server Error');}
		})
		.then((resData) => {
			newTask.id = resData.id
			this.setState({cards: nextState});
		})
		.catch((error) => {
			console.error('Fetch error:', error);
			this.setState(prevState);
		});
	}

	deleteTask(cardId, taskId, taskIndex) {
		//find the index of the card
		let cardIndex = this.state.cards.findIndex((card) => card.id == cardId);
		let prevState = this.state;
		//create a new object without the task
		let nextState = update(this.state.cards, {
			[cardIndex]: {
				tasks: {$splice: [[taskIndex, 1]]}
			}
		});
		//set the componenet state to the mutated object
		this.setState({cards: nextState});
	
		//call the API to remove the task on the server
		fetch(`${API_URL}/cards/${cardId}/tasks/${taskId}`, {
			method: 'delete',
			headers: API_HEADERS
		})
		.then((res) => {
			if(!res.ok) throw new Error('Server error');
		})
		.catch((error) => {
			console.error('Fetch error:', error)
			this.setState(prevState);
		});
	}

	toggleTask(cardId, taskId, taskIndex) {
		let prevState = this.state;
		let cardIndex = this.state.cards.findIndex((card) => card.id == cardId);
		let newDoneValue;
		let nextState = update(this.state.cards, {
			[cardIndex]: {
				tasks: {
					[taskIndex]: {
						done: {$apply: (done) => {
								newDoneValue = !done;
								return newDoneValue;
							}
						}
					}
				}
			}
		});
		
		this.setState({cards: nextState});
	
		fetch(`${API_URL}/cards/${cardId}/tasks/${taskId}`, {
			method: 'put',
			headers: API_HEADERS,
			body: JSON.stringify({done: newDoneValue})
		})
		.then((res) => {
			if(!res.ok) throw new Error('Server error');
		})
		.catch((error) => {
			console.error('Fetch error:', error);
			this.setState(prevState);
		});
	}

	updateCardStatus(cardId, listId) {
		//find the index of the card
		let cardIndex = this.state.cards.findIndex((card) => card.id == cardId);
		//get the current card
		let card = this.state.cards[cardIndex];
		//set the component state to the mutated object
		if(card.status !== listId) {
			this.setState(update(this.state, {
				cards: {
					[cardIndex] : {
						status: {$set: listId}
					}
				}
			}));
		}
	}

	updateCardPosition(cardId, afterId) {
		if(cardId !== afterId) {
			//find the index of the card
			let cardIndex = this.state.cards.findIndex((card) => card.id == cardId);
			//get the current card
			let card = this.state.cards[cardIndex];
			//find the card that user is hovering over
			let afterIndex = this.state.cards.findIndex((card) => card.id == afterId);
			//use splice to remove the card and reinsert it into new index
			this.setState(update(this.state, {
				cards: {
					$splice: [
						[cardIndex, 1]
						[afterIndex, 0, card]
					]
				}
			})); 
		}
	}
	
	render() {
		return (
			<KanbanBoard cards={this.state.cards}
					taskCallbacks= {{
						toggle: this.toggleTask.bind(this),
						delete: this.deleteTask.bind(this),
						add: this.addTask.bind(this) 
					}} 
					cardCallbacks={{
						updateStatus: this.updateCardStatus.bind(this),
						updatePosition: this.updateCardPosition.bind(this)
					}}
			/>
		)		
	}
}