import React, { Component } from 'react';
import NewsHeader from '../../components/NewsHeader/NewsHeader';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import ContentList from '../../components/ContentList';

class NewsPage extends Component {
  render() {
    return (
      <PageTemplate>
        <NewsHeader />
        <ContentList />
      </PageTemplate>
    );
  }
}

export default NewsPage;
