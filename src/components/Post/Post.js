import React from 'react';
import './Post.scss';
import testImg from '../../images/testPostImg.jpg';

const Post = () => {
  return (
    <>
      <div className="post-box">
        <div className="post-box-img">
          <img alt="포스트 사진(images)" src={testImg}></img>
        </div>
        <div className="post-box-content">
          <div className="post-box-content-place">
            <span>장소(place)</span>
          </div>
          <div className="post-box-content-title">
            <h2>
              <span>제목(title)</span>
            </h2>
          </div>
          <div className="post-box-content-excerpt">내용(text)</div>
          <div className="post-box-content-meta">
            <div className="post-box-meta-author-time">
              <span className="author">
                <span>
                  작성자: <span className="author-name">대구전문(owner)</span>
                </span>
              </span>
              <span className="divider">/</span>
              <span className="time">
                <time className="timeago">
                  2019-12-25일 12:12:12초(created_at)
                </time>
              </span>
            </div>
            <div className="post-box-content-meta-time-info">
              <span className="time">
                <time className="timeage">
                  2019-12-25일 12:12:12초(created_at)
                </time>
              </span>
              <div className="post-box-stats">
                <span className="divider">&nbsp;&nbsp;</span>
                <span className="comment-count"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Post;
