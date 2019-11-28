import React, { Component } from 'react';
import './NewsHeader.css';

class NewsHeader extends Component {
  render() {
    return (
      <div className="header">
        <div className="title">
          <span>뉴스룸</span>
        </div>
        <div className="buttons">
          <button>추가</button>
          <button>삭제</button>
        </div>
      </div>
    );
  }
}

export default NewsHeader;
