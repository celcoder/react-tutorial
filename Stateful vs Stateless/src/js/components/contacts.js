'use strict';
import React, {Component, PropTypes} from 'react';
import SearchBar from './searchBar';
import ContactList from './contactList';

//Main component. Renders a Searchbar and a ContactList
export default class ContactsApp extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ContactList contacts={this.props.contacts} />
      </div>
    )
  }
}

ContactsApp.propTypes ={
  contacts: PropTypes.arrayOf(PropTypes.object)
}
