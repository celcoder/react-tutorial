'use strict';
import React, {Component, PropTypes} from 'react';
import ContactItem from './contactItem';


export default class ContactList extends Component {
	render() {
		return (
			<ul>
				{this.props.contacts.map((contact) => 
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
