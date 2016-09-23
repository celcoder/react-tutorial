import React from 'react';
import marked from 'marked';

import CheckList from './CheckList';

export default class Card extends React.Component {
  constructor() {
    super()
    this.state = {
      showDetails: false
    }
  }

  toggle() {
    const showDetails = !this.state.showDetails;
    this.setState({showDetails});
  }

  render() {
    let cardDetails;
    
    let sideColor = { 
      position: 'absolute',
      zIndex: -1,
      top: 0,
      bottom: 0,
      left: 0,
      width: 7,
      backgroundColor: this.props.color
    };

    if(this.state.showDetails) {
      cardDetails = (
        <div className="card__details">
          <span dangerouslySetInnerHTML={{__html:marked(this.props.description)}}></span>
          <CheckList cardId={this.props.id} tasks={this.props.tasks} />
        </div>
      )
    }
    
    return (
      <div className='card'>
        <div style={sideColor}>
          <div className='card__title' onClick={this.toggle.bind(this)}>
          {this.props.title}
          </div>
        </div>
        {cardDetails}
      </div>
    )
  }
}