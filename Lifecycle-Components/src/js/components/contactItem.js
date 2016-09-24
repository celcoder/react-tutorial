'use strict';
import React, {Component, PropTypes} from 'react';

export default class ContactItem extends Component {
	render() {
		return <li>{this.props.name} - {this.props.email}</li>
	}
}

ContactItem.PropTypes = {
	name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired
}