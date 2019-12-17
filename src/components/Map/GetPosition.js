const GetPosition = async () => {
  let curposition;
  const getData = callback => {
    if (navigator.geolocation) {
      // GPS를 지원하면
      return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(
          function(position) {
            curposition = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            };
            resolve(curposition);
          },
          function(error) {
            console.error(error);
          },
          {
            enableHighAccuracy: false,
            maximumAge: 0,
            timeout: Infinity,
          },
        );
      });
    } else {
      alert('GPS를 지원하지 않습니다');
    }
  };

  return new Promise(function (resolve, reject) {
    getData()
      .then(function(data) {
        resolve(data); // response 값 출력
      })
      .catch(function(err) {
        console.error(err); // Error 출력
      });
  });
};

export default GetPosition;
