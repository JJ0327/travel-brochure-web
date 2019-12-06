import React, { Component } from 'react';
import './NewsHeader.css';

class NewsHeader extends Component {
  // PostKorea = () => {};
  // ChangeCountry = () => {
  //   PostKorea();
  // };
  render() {
    return (
      <div className="header">
        <div className="title">
          <span>뉴스룸</span>
        </div>
        <div className="NewsWrap">
          <button className="arrowFromLeft" onClick={this.ChangeCountry}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 9 9"
                width="9"
                height="9"
              >
                <path d="M0 0l7 4.5L0 9V0z"></path>
              </svg>
              <span>국내</span>
            </div>
          </button>
          <button className="arrowFromLeft" onClick>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 9 9"
                width="9"
                height="9"
              >
                <path d="M0 0l7 4.5L0 9V0z"></path>
              </svg>
              <span>해외</span>
            </div>
          </button>
        </div>
      </div>
    );
  }
}

export default NewsHeader;
