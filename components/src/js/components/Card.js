import React, {Component, PropTypes} from 'react';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';
import marked from 'marked';
import CheckList from './CheckList';
import {DragSource} from 'react-dnd';
import constants from './constants';

let titlePropType = (props, propName, componentName) => {
  if(props[propName]) {
    let value = props[propName];
    if(typeof value !== 'string' || value.length > 80) {
      return new Error(
        `${propName} in ${componentName} is longer than 80 characters`
      );
    } 
  }
}

const cardDragSpec = {
  beginDrag(props) {
    return {
      id: props.id
    }
  }
}

let collectDrag = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource()
  };
}


class Card extends Component {
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
    const {connectDragSource} = this.props;
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
          <CheckList cardId={this.props.id} tasks={this.props.tasks} taskCallbacks={this.props.taskCallbacks}/>
        </div>
      )
    }
    
    return connectDragSource (
      <div className='card'>
        <div style={sideColor}>
          <div className='card__title' onClick={this.toggle.bind(this)}>
          {this.props.title}
          </div>
        </div>
        <ReactCssTransitionGroup transitionName='toggle' transitionEnterTimeout={250} transitionLeaveTimeout={250}>
          {cardDetails}
        </ReactCssTransitionGroup>
      </div>
    )
  }
}

Card.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  color: PropTypes.string,
  tasks: PropTypes.arrayOf(PropTypes.object),
  taskCallbacks: PropTypes.object,
  cardCallbacks: PropTypes.object,
  connectDragSource: PropTypes.func.isRequired
};

export default DragSource(constants.CARD, cardDragSpec, collectDrag)(Card);