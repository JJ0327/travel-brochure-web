const GetPosition = async () => {
  let curposition;
  console.log('enter');
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
            console.log(curposition);
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

  getData()
    .then(function(data) {
      console.log(data);
      return data; // response 값 출력
    })
    .catch(function(err) {
      console.error(err); // Error 출력
    });
};

export default GetPosition;
