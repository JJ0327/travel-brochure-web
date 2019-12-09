import React from 'react';
import NewsHeader from '../../components/NewsHeader/NewsHeader';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import { Redirect } from 'react-router-dom';
import './NewsPage.css';
import ListItem from '../../components/ContentListItem/ListItem';

const NewsPage = ({ authenticated }) => {
  return (
    <>
      {authenticated === null && <Redirect to="/auth" />}
      <div className="app">
        <NavigationBar />
        <NewsHeader />
        <ListItem />
      </div>
    </>
  );
};

export default NewsPage;
