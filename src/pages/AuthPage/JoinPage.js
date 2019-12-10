import React, {useState} from 'react';
import register from "../../components/Auth/Register";
const JoinPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');

    async function handleClick(){
        let status=null;
        status = await register(username, password, repassword);
        console.log(status);
        if(status.status===200){
            window.location.href="http://localhost:1111/auth";
        }else if (status.message==="비밀번호가 일치하지 않습니다"){
            alert("비밀번호 오류")
        }else if (status.message==="이미 존재하는 사용자 이름입니다"){
            alert("이미있는 사용자")
        }else{
            alert("입력되지 않은 항목이 있습니다");
        }
    }
    return(
        <>
        <div className="wrapper">
        <div className="session">
          <div className="left">
            <path
              className="st01"
              d="m126 302.2c-2.3 0.7-5.7 0.2-7.7-1.2l-105-71.6c-2-1.3-3.7-4.4-3.9-6.7l-9.4-126.7c-0.2-2.4 1.1-5.6 2.8-7.2l93.2-86.4c1.7-1.6 5.1-2.6 7.4-2.3l125.6 18.9c2.3 0.4 5.2 2.3 6.4 4.4l63.5 110.1c1.2 2 1.4 5.5 0.6 7.7l-46.4 118.3c-0.9 2.2-3.4 4.6-5.7 5.3l-121.4 37.4zm63.4-102.7c2.3-0.7 4.8-3.1 5.7-5.3l19.9-50.8c0.9-2.2 0.6-5.7-0.6-7.7l-27.3-47.3c-1.2-2-4.1-4-6.4-4.4l-53.9-8c-2.3-0.4-5.7 0.7-7.4 2.3l-40 37.1c-1.7 1.6-3 4.9-2.8 7.2l4.1 54.4c0.2 2.4 1.9 5.4 3.9 6.7l45.1 30.8c2 1.3 5.4 1.9 7.7 1.2l52-16.2z"
            />
          </div>
          <form action="" className="log-in" autocomplete="off">
            <h4>
              Travel <span>Guide</span>
            </h4>
            <p>Welcome! Sign up and get more information.</p>
            <div className="floating-label">
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
            <div className="floating-label">
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
            <div className="floating-label">
              <input
                className="Auth-input"
                value={repassword}
                onChange={({ target: { value } }) => setRepassword(value)}
                type="password"
                placeholder="Reconfirm Password"
                autocomplete="off"
              />
              <label for="password">Reconfirm Password:</label>
            </div>
            <button className="Auth-button" type="button" onClick={handleClick} >
              Sign Up
            </button>
            <a href="/auth" className="discrete">
              혹시 계정이 있으신가요?
            </a>
          </form>
        </div>
      </div>
        </>
    )
}

export default JoinPage;