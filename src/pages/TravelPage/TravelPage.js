/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import ChagneArticle from '../../components/ChangeArticle/ChangeArticle';
import './TravelPage.css';

const TravelPage = ({ authenticated }) => {
  const [number, setNumber] = useState(1);
  return (
    <>
      {authenticated === null && <Redirect to="/auth" />}
      <div className="travel-main">
        <NavigationBar />
        <div className="travel-content">
          <div className="travle-sidebar">
            <div className="travle-sidebar__sec">
              <button
                className="travle-sidebar__btn"
                onClick={() => setNumber(1)}
                type="button"
              >
                전체보기
              </button>
            </div>
            <div className="travle-sidebar__sec">
              <button
                className="travle-sidebar__btn"
                onClick={() => setNumber(2)}
                type="button"
              >
                경남
              </button>
            </div>
          </div>
          {<ChagneArticle number={number} />}
        </div>
      </div>
    </>
  );
};

export default TravelPage;
