import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import login from '../../components/Auth/Auth';
import checkToken from '../../components/Auth/VerifyToken';
import saveToken from '../../components/Auth/SaveToken';
import './AuthPage.css';

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
      <div className="auth-main">
        <h1 className="auth-h1">Login</h1>
        <input
          value={username}
          onChange={({ target: { value } }) => setUsername(value)}
          type="text"
          placeholder="username"
        />
        <input
          value={password}
          onChange={({ target: { value } }) => setPassword(value)}
          type="password"
          placeholder="password"
        />
        <button onClick={handleClick} type="button">
          Login
        </button>
      </div>
    </>
  );
};

// AuthPage.propTypes = {
//   authenticated: PropTypes.oneOfType([]),
// };

export default AuthPage;
