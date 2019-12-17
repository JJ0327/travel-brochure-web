import axios from 'axios';
import { SERVER } from '../../config/config.json';

const getMark = async (token) => {
    const objectToken = JSON.parse(token);
    const curToken = "Token "+objectToken.token;
    let place;
    const getData = callback => {
        return new Promise(function(resolve, reject) {
        axios
        .get(`${SERVER}/api/place/`, {
            headers: {
                Authorization: curToken
            }
        })
        .then(function({data : {data:  {place} }}){
            resolve (place);
        })
        .catch(function(err){
            console.log(err)
        })
    })
    }
    
    return new Promise(function (resolve, reject) {
        getData()
        .then(function(data) {
            let position = data.map((v) => {
                return [v.latitude,v.longitude];
            });
            resolve(position); // response 값 출력
          })
          .catch(function(err) {
            console.error(err); // Error 출력
          });
    })
}

export default getMark;