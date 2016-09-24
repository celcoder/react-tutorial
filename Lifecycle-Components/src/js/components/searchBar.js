'use strict';
import React, {Component, PropTypes} from 'react';

//Pure componenet that receives 2 rpops from the parent(contacts)
//filterText(string) and onUserInput (callback func)
//use of onChange event on input field.
export default class SearchBar extends Component {
	handleChange(event) {
		this.props.onUserInput(event.target.value)
	}

	render() {
		return <input type='search' placeholder='search' value={this.props.filterText} onChange={this.handleChange.bind(this)} />
	}
}

SearchBar.propTypes = {
	filterText: PropTypes.string.isRequired,
	onUserInput: PropTypes.func.isRequired
}