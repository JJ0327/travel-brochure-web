import React, { Component } from 'react';
import NewsHeader from '../../components/NewsHeader/NewsHeader';
import ContentList from '../../components/ContentList/ContentList';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Post from '../../components/Post/Post';
import { generateId } from '../../utils'; // 랜덤 ID 생성 함수
import './NewsPage.css';

class NewsPage extends Component {
  state = {
    posts: [
      {
        id: '0',
        title: '제목',
        contetns: '내용',
      },
    ],
    activeId: '0',
  };

  // 보고있는 포스트 표시
  handleListItemClick = id => {
    this.setState({ activeId: id });
  };

  handleEditPost = (type, e) => {
    const posts = [...this.state.posts];

    const post = posts.find(item => item.id === this.state.activeId);

    post[type] = e.target.value;

    this.setState({
      posts,
    });
  };

  handleDeletePost = () => {
    const posts = this.state.posts.filter(
      item => item.id !== this.state.activeId,
    );
    this.setState({
      posts,
      activeId: posts.length === 0 ? null : posts[0].id,
    });
  };

  render() {
    const { posts, activeId } = this.state;
    const activePost = posts.filter(item => item.id === activeId)[0];
    return (
      <div className="app">
        <NavigationBar />
        <NewsHeader />
        <div className="container">
          <ContentList
            posts={posts}
            activeId={activeId}
            onListItemClick={this.handleListItemClick}
          />
          {posts.length !== 0 && <Post post={activePost} />}
        </div>
      </div>
    );
  }
}

export default NewsPage;
