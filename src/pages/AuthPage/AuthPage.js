import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import login from '../../components/Auth/Auth';
import checkToken from '../../components/Auth/VerifyToken';
import saveToken from '../../components/Auth/SaveToken';
import './AuthPage.scss';

const AuthPage = ({ authenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [flag, setFlag] = useState(0);

  let userState = null;

  const handleClick = async () => {
    userState = await login(username, password);
    if (userState === null) {
      alert('Failed to login');
      setUsername('');
      setPassword('');
    } else {
      saveToken(userState);
      window.location.reload();
    }
  };

  async function fetchComment() {
    setFlag(0);
    const type = await checkToken(authenticated);
    console.log(type);
    setFlag(type);
  }

  useEffect(() => {
    fetchComment();
  });

  return (
    <>
      {flag === 1 && (
        <Redirect to={{ pathname: '/', state: { authenticated } }} />
      )}
      <div className="wrapper">
        <div class="session">
          <div class="left">
            <path
              class="st01"
              d="m126 302.2c-2.3 0.7-5.7 0.2-7.7-1.2l-105-71.6c-2-1.3-3.7-4.4-3.9-6.7l-9.4-126.7c-0.2-2.4 1.1-5.6 2.8-7.2l93.2-86.4c1.7-1.6 5.1-2.6 7.4-2.3l125.6 18.9c2.3 0.4 5.2 2.3 6.4 4.4l63.5 110.1c1.2 2 1.4 5.5 0.6 7.7l-46.4 118.3c-0.9 2.2-3.4 4.6-5.7 5.3l-121.4 37.4zm63.4-102.7c2.3-0.7 4.8-3.1 5.7-5.3l19.9-50.8c0.9-2.2 0.6-5.7-0.6-7.7l-27.3-47.3c-1.2-2-4.1-4-6.4-4.4l-53.9-8c-2.3-0.4-5.7 0.7-7.4 2.3l-40 37.1c-1.7 1.6-3 4.9-2.8 7.2l4.1 54.4c0.2 2.4 1.9 5.4 3.9 6.7l45.1 30.8c2 1.3 5.4 1.9 7.7 1.2l52-16.2z"
            />
          </div>
          <form action="" class="log-in" autocomplete="off">
            <h4>
              Travel <span>Guide</span>
            </h4>
            <p>Welcome! Sign in and get more information.</p>
            <div class="floating-label">
              <input
                className="Auth-input"
                value={username}
                onChange={({ target: { value } }) => setUsername(value)}
                placeholder="Username"
                type="text"
                autocomplete="off"
              />
              <label for="email">Username:</label>
            </div>
            <div class="floating-label">
              <input
                className="Auth-input"
                value={password}
                onChange={({ target: { value } }) => setPassword(value)}
                type="password"
                placeholder="Password"
                autocomplete="off"
              />
              <label for="password">Password:</label>
            </div>
            <button className="Auth-button" type="button" onClick={handleClick}>
              Log in
            </button>
            <a href="#" class="discrete">
              가입된 아이디가 없나요? 지금 가입하세요!
            </a>
          </form>
        </div>
      </div>
    </>
  );
};

// AuthPage.propTypes = {
//   authenticated: PropTypes.oneOfType([]),
// };

export default AuthPage;
