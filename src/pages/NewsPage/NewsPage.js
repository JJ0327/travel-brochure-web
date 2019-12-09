import React, { useState, useCallback, useEffect } from 'react';
import NewsHeader from '../../components/NewsHeader/NewsHeader';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import './NewsPage.css';
import { SERVER } from './../../config/config.json';
import Time from 'react-time';
import Axios from 'axios';

const NewsPage = ({ img, title, text, place, created_at, imgUrl, owner }) => {
  const [postList, setPostList] = useState([]);
  let postArray = [];
  let imagesArray = [];

  const getPost = useCallback(async () => {
    const data = await Axios.get(`${SERVER}/api/post`);
    postArray = await data.post;
    imagesArray = await data.post.images;
    await handleMatchPost();
  }, []);

  const handleMatchPost = async () => {
    let array = [];
    let data = [];
    postArray.forEach(item => {
      imagesArray.forEach(images => {
        console.log(
          '****item.id:' +
            item.id +
            ' ***** item identify id = ' +
            item.identifyId +
            '*****image id*****=' +
            images.id,
        );
        data = {
          ...item,
          imgUrl: item.id === images.post ? images.fileName : '',
        };
        console.log('data: ', images.fileName);
      });

      array.push(data);
    });

    console.log('postList', array);

    setPostList(array);
  };
  useEffect(() => {
    getPost();
  }, [getPost]);

  return (
    <div className="app">
      <NavigationBar />
      <NewsHeader />
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

export default NewsPage;
