import React from 'react';

export default class CheckList extends React.Component {
  render() {
    let tasks = this.props.tasks.map((task, i) => {
      return <li key={i} className='checklist__task'>
        <input type='checkbox' defaultChecked={task.done} />
        {task.name}
        <a href='#' className='checklist__task--remove' />
      </li>
    });
    return (
      <div className='checklist'>
        <ul>{tasks}</ul>
      </div>
    );
  }
}