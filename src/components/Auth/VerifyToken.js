import axios from 'axios';
import { SERVER } from '../../config/config.json';
import refreshToken from './RefreshToken';

const checkToken = async token => {
  if (token === null) {
    return 0;
  }
  const objectToken = JSON.parse(token);
  const curToken = objectToken.token;
  const reToken = objectToken.refreshToken;

  let status = null;

  await axios
    .post(`${SERVER}/api/verify/`, {
      token: curToken,
    })
    .then(({ data }) => {
      status = data.status;
      console.log(status);
    })
    .catch(response => {
      console.log(response);
    });

  switch (status) {
    case 200:
      return 1;
    case 400:
      return 0;
    case 401:
      refreshToken(reToken);
      return 1;
    default:
      return 0;
  }
};

export default checkToken;
