'use strict';
import React, {Component, PropTypes} from 'react';
import ContactItem from './contactItem';

//Pure component that receives both contacts and filterText as props
//The component is responsible for actually filtering the contacts before displaying
//It's considered a pure componenet because given the same contact and filterText props
//the output will always be the same

export default class ContactList extends Component {
	render() {
		let filteredContacts = this.props.contacts.filter(
			(contact) => contact.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) !== -1 )
		
		return (
			<ul>
				{filteredContacts.map((contact) => 
								 <ContactItem key={contact.email}
															name={contact.name}
															email={contact.email} />
				)}
			</ul>
		)
	}
}

ContactList.PropTypes = {
	contacts: PropTypes.arrayOf(PropTypes.object)
}
