import React, { useState } from "react";
import "../css/Login.css";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 로컬 스토리지에 저장된 아이디와 비밀번호 가져오기
    const storedEmail = localStorage.getItem("id"); // 로컬 스토리지에서 이메일 가져오기
    const storedPassword = localStorage.getItem("password"); // 로컬 스토리지에서 비밀번호 가져오기

    // 입력된 이메일과 비밀번호가 일치하는지 확인
    if (email === storedEmail && password === storedPassword) {
      // 일치하는 경우, 로그인 상태를 로컬 스토리지에 저장하고 홈페이지로 리디렉션
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } else {
      // 일치하지 않는 경우, 알림창 표시
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
  };

  const Join = () => {
    let path = "/JoinForm";
    navigate(path);
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h2>명당로그인</h2>
      <ul>
        <li>
          <input
            required
            type="text"
            placeholder="아이디"
            id="id"
            className="account"
            title="아이디입력"
            value={email}
            onChange={handleEmailChange}
          />
        </li>
        <li>
          <input
            required
            type="password"
            placeholder="비밀번호"
            id="password"
            className="account"
            title="비밀번호입력"
            value={password}
            onChange={handlePasswordChange}
          />
        </li>
        <li>
          <button type="submit" id="login_btn" className="account">
            로그인
          </button>
        </li>
      </ul>
      <div>
        <ul>
          <li>
            <a href="/Join" onClick={Join}>
              회원가입
            </a>
          </li>
          <li>
            <a href="/">아이디 찾기</a>
          </li>
          <li>
            <a href="/">비밀번호 찾기</a>
          </li>
        </ul>
      </div>
    </form>
  );
}

export default LoginForm;
