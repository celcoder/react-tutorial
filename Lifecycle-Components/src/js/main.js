'use strict';

import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

import ContactsAppContainer from './Components/ContactsAppContainer';

const app = document.getElementById('app');
ReactDOM.render(<ContactsAppContainer />, app);


