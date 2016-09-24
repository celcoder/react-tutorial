'use strict';

import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

import Contacts from './Components/contacts';

const contacts =  [
	{ name: 'Ethan Lee', email: 'ethanlee@gmail.com' },
	{ name: 'Chang Lee', email: 'Changlee@gmail.com'},
	{ name: 'Shawn Lee', email: 'Shawn@gmail.com'},
	{ name: 'Ann park', email: 'Annepark@gmail.com'},
	{ name: 'mich Lee', email: 'mich@gmail.com'},
	{ name: 'grace Lee', email: 'grace@gmail.com'},
	{ name: 'rich Lee', email: 'rich@gmail.com'},
]


const app = document.getElementById('app');
ReactDOM.render(<Contacts contacts={contacts}/>, app);


