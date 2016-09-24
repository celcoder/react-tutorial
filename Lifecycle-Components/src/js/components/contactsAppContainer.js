import React, {Component, Proptypes} from 'react';
import {render} from 'react-dom';
import ContactsApp from './contactsApp';


export default class ContactsAppContainer extends Component {
	constructor() {
		super();
		this.state = {
			contacts: []
		}
	}

	componentDidMount() {
		fetch('../public/contacts.json')
			.then((res) => res.json())
			.then((resData) => {
				this.setState({contacts: resData})
			})
			.catch((error) => {
				console.log('Error fetching and parsing data', error);
			})
	}

	render() {
		return (
			<ContactsApp contacts={this.state.contacts} />
		)
	}
}