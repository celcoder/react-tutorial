'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import $ from 'jquery';

import KanbanBoardContainer from './components/KanbanBoardContainer';


const app = document.getElementById('app');
ReactDOM.render(<KanbanBoardContainer />, app);



// <--------------This hard coded data was removed.  This will be fetched via http ------->//
// let cardsList = [
//   {
//     id: 1,
//     title: 'Read the Book',
//     description: 'I should read the whole book',
//     color: '#BD8D31',
//     status: 'in-progress',
//     tasks: []
//   },
//   {
//     id: 2,
//     title: 'Write some code',
//     description: `Code along with this tutorial. The 
//                   complete source can be found at 
//                   [github] (https://github.com/celcoder)`,
//     color: '#3A7E28',
//     status: 'todo',
//     tasks: [
//       {
//         id: 1,
//         name: "ContactList Example",
//         done: true
//       },
//       {
//         id: 2,
//         name: 'React Example',
//         done: false
//       },
//       {
//         id: 3,
//         name: 'My own experiment',
//         done: false
//       }
//     ]
//   },
// ];
