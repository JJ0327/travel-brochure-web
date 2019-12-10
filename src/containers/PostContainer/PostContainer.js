import React, { Component } from 'react';
import { PostWrapper, Post } from '../../components';
import * as service from '../../services/post';

class PostContainer extends Component {
  componentDidMount() {
    this.fetchPostInfo(1);
  }

  fetchPostInfo = async postId => {
    const post = await service.getPost(postId);
    console.log(post);
  };

  render() {
    return (
      <PostWrapper>
        <Post />
      </PostWrapper>
    );
  }
}

export default PostContainer;
