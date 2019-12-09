import React from 'react';
import './PostHeader.css';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import { Redirect } from 'react-router-dom';

const PostHeader = ({ authenticated }) => {
  return (
    <>
      {authenticated === null && <Redirect to="/auth" />}
      <div>
        <NavigationBar />
        POSTS
      </div>
    </>
  );
};

export default PostHeader;
