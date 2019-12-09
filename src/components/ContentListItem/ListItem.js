import React, { useState, useCallback, useEffect } from 'react';
import Axios from 'axios';
import { SERVER } from './../../config/config.json';
import Time from 'react-time';

const ListItem = ({ img, title, text, place, created_at, imgUrl, owner }) => {
  const [postList, setPostList] = useState([]);
  let postArray = [];
  let imagesArray = [];

  const getPost = useCallback(async () => {
    const data = await Axios.get(`${SERVER}/api/post`);

    postArray = await data.post;
    imagesArray = await data.post.images;
    await handleMatchPost();
  }, []);

  useEffect(() => {
    getPost();
  }, [getPost]);

  return (
    <div>
      {postList.map((item, key) => {
        return (
          <div className="container" key={key}>
            <div>
              <span>작성자: {item.owner}</span>
              <div>
                <span>제목: {item.title}</span>
                <span>
                  작성한 시간:
                  <Time value={item.created_at} format="YYYY/MM/DD hh:mm:ss" />
                </span>
                <span>장소: {item.place}</span>
              </div>
            </div>
            <div>
              <p>내용: {item.text}</p>
            </div>
            <div>
              <img src={item.imgUrl} alt="게시물 이미지"></img>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListItem;
