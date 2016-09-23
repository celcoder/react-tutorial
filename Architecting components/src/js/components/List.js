import React from 'react';

import Card from './Card';

export default class List extends React.Component {
  render() {
    let cards = this.props.cards.map((card, i) => {
      return <Card key={card.id} 
                  id={card.id} 
                  title={card.title} 
                  description={card.description} 
                  color={card.color}
                  tasks ={card.tasks} />
    });
    return (
      <div className='list'>
        <h1>{this.props.title}</h1>
        {cards}
      </div>
    );
  }
}