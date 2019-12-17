import React, { useState, useEffect } from 'react';
import GetPosition from '../../components/Map/GetPosition';
import './MapPage.css';
import { Redirect } from 'react-router-dom';
import getMark from '../../components/Map/GetMark';

const MapPage = ({authenticated}) => {
  // 특정 위치의 좌표와 가까운 로드뷰의 panoId를 추출하여 로드뷰를 띄운다.

  const [curPosition, SetCurPosition] = useState({});
  const [flag, SetFlag] = useState(0);
  const [marker, SetMarker] = useState([]);
  let map;

  async function FetchMap() {
    GetPosition()
    .then(function(response) {
      SetCurPosition(response);
      const container = document.getElementById('map'); // 지도를 담을 영역의 DOM 레퍼런스
      const options = { // 지도를 생성할 때 필요한 기본 옵션
	    center: new window.kakao.maps.LatLng(curPosition.latitude, curPosition.longitude), // 지도의 중심좌표. 
      level: 13, // 지도의 레벨(확대, 축소 정도)
      tileAnimation : false
      };
      map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
      SetFlag(1);
    });
    getMark(authenticated)
    .then(function(response) {
      console.log(response);
      let marker = response.map((v) => {
        var position = new window.kakao.maps.LatLng(v[0],v[1])
        return new window.kakao.maps.Marker({
          position,
          clickable: true
        })
      })
      console.log(marker);
    })
  }

  useEffect(() => {
    if(flag===0) FetchMap();
  });

  return (
    <>
    {authenticated === null && (
      <Redirect to={{ pathname: '/auth', state: { authenticated } }} />
    )}
    <div className="Map_div">
      <div id="map"/>
      <div className="Map_right"></div>
    </div>
  </>
  );
};

export default MapPage;
