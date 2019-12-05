import React, { Component } from 'react';

const Content = () => {
  return (
    <div className="content">
      안녕세상
      {this.props.tilte}
      {this.props.body}
    </div>
  );
};

class ContentList extends Component {
  state = {
    notes: { id: '0', title: '제목', body: '내용' },
  };

  render() {
    return (
      <div className="content-list">
        {this.state.news
          ? this.state.news.map(news => {
              return <Content title={news.title} body={news.body} />;
            })
          : ''}
      </div>
    );
  }
}

export default ContentList;
