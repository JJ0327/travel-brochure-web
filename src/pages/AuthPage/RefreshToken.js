import axios from 'axios';
import { SERVER } from '../../config/config.json';
import saveToken from './SaveToken';

const refreshToken = async reToken => {
  let userState;

  await axios
    .post(`${SERVER}/api/refresh/`, {
      token: reToken,
    })
    .then(({ data }) => {
      userState = { token: data.data.token, refresh_token: reToken };
    });

  saveToken(userState);
};

export default refreshToken;
