'use strict';

import React from 'react';

export default class Home extends React.Component {
  render() {
    return (
      <div className = 'jumbotron'>
        <h1>Pluralsight Administration</h1>
        <p>React, React-Router, and Flux for Ultra-Fast Web-App</p>
      </div>
    );
  }
}

// export default class Nav extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       collapsed: true,
//     };
//   }
// }