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
        <div className='card__title' onClick={this.toggle.bind(this)}>{this.props.title}</div>
        {cardDetails}
      </div>
    )
  }
}