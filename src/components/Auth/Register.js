import axios from 'axios';
import { SERVER } from '../../config/config.json';

const register = async (username, password, repassword) => {
    let status=0;

    await axios
    .post(`${SERVER}/api/register/`, {
        username: username,
        password1: password,
        password2: repassword
    })
    .then(({data}) => {
        status = data
    })
    .catch(response => {
        console.log(response);
    })
    return status
}

export default register;