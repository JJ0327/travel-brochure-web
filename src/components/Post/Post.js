import React, { Component } from 'react';

class Post extends Component {
  render() {
    const { post } = this.props;
    const { title } = post;
    return (
      <div className="post">
        <div className="title" value={title} />
      </div>
    );
  }
}

export default Post;
