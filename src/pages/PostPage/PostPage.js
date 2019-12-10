import React from 'react';
import { PostHeader } from '../../components/index';
import { PostContainer } from '../../containers/index';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import './PostPage.css';
import { Redirect } from 'react-router-dom';

const PostPage = ({ authenticated }) => {
  return (
    <>
      {authenticated === null && <Redirect to="/auth" />}
      <div>
        <NavigationBar />
        <PostHeader />
        <PostContainer />
      </div>
    </>
  );
};

export default PostPage;
