import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    const { active, title, contents, onClick } = this.props;
    return (
      <div
        className={active ? 'list-item active' : 'list-item'}
        onClick={onClick}
      >
        <div className="title">{title}</div>
        <div className="list-item-contents">{contents}</div>
      </div>
    );
  }
}

export default ListItem;
