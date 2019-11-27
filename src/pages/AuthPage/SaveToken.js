const saveToken = userState => {
  localStorage.setItem(
    'userInfo',
    JSON.stringify({
      token: userState.token,
      refreshToken: userState.refresh_token,
    }),
  );
};

export default saveToken;
