import React, { useState, useEffect } from 'react';
import GetPosition from '../../components/Map/GetPosition';

const MapPage = () => {
  // 특정 위치의 좌표와 가까운 로드뷰의 panoId를 추출하여 로드뷰를 띄운다.

  const [curPosition, SetCurPosition] = useState({});

  var mapStyle = {
    width: '100%',
    height: '900px',
    overflow: 'hidden',
  };
  var roadviewStyle = {
    width: '100%',
    height: '300px',
  };

  async function FetchPosition() {
    GetPosition().then(function(positiondata) {
      console.log(positiondata);
    });
  }

  useEffect(() => {
    FetchPosition();
  });

  return (
    <div>
      <div id="map" style={mapStyle}></div>
      <div id="roadview" style={roadviewStyle}></div>
      <p>가나다라 </p>
    </div>
  );
};

export default MapPage;
