import React, { Component } from 'react';
import { PostHeader } from '../../components/index';
import { PostContainer } from '../../containers/index';

class PostPage extends Component {
  render() {
    return (
      <div>
        <PostHeader />
        <div>
          <PostContainer />
        </div>
      </div>
    );
  }
}

export default PostPage;
