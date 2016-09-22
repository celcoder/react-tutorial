'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import $ from 'jquery';

import KanbanBoard from './components/KanbanBoard';

let cardsList = [
  {
    id: 1,
    title: 'Read the Book',
    description: 'I should read the whole book',
    status: 'in-progress',
    tasks: []
  },
  {
    id: 2,
    title: 'Write some code',
    description: 'Code along with samples in this book',
    status: 'todo',
    tasks: [
      {
        id: 1,
        name: "ContactList Example",
        done: true
      },
      {
        id: 2,
        name: 'React Example',
        done: false
      },
      {
        id: 3,
        name: 'My own experiment',
        done: false
      }
    ]
  },
];

const app = document.getElementById('app');
ReactDOM.render(<KanbanBoard cards={cardsList} />, app);


