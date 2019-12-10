import axios from 'axios';
import SERVER from '../config/config.json';

export function getPost(postId) {
  return axios.get(`${SERVER}/api/post/` + postId);
}
