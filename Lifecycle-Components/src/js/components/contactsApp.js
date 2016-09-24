'use strict';
import React, {Component, PropTypes} from 'react';
import SearchBar from './searchBar';
import ContactList from './contactList';

//Main (stateful) component. Renders a Searchbar and a ContactList
//Renders a SearchBar and a ContactList
//Passes down filterText state and handleUserInput callback as props
export default class ContactsApp extends Component {
  constructor(){
  	super();
  	this.state = {
  		filterText: ''
  	};
  }

  handleUserInput(searchContact) {
  	let filterText = searchContact;
  	this.setState({filterText})
  }

  render() {
    return (
      <div>
        <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)} />
        <ContactList contacts={this.props.contacts} 
      							filterText={this.state.filterText} />
      </div>
    )
  }
}

ContactsApp.propTypes ={
  contacts: PropTypes.arrayOf(PropTypes.object)
}
