import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from "../images/thislogo.jpg";

const Header = () => {
  let navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    let path = "/Login";
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const HomeC = () => {
    let path = "/";
    navigate(path);
  };

  const TradeC = () => {
    let path = "/Trade";
    navigate(path);
  };

  const LostC = () => {
    let path = "/LostMap";
    navigate(path);
  };

  const StudyC = () => {
    let path = "/Study";
    navigate(path);
  };

  const JoinC = () => {
    let path = "/Join";
    navigate(path);
  };

  return (
    <HeaderContainer>
      <Logo src={logo} alt="logo"></Logo>
      <h1
        onClick={HomeC}
        style={{ margin: "0", cursor: "pointer", color: "#007bff" }}
      >
        명당
      </h1>
      <Menu>
        <MenuItem onClick={TradeC}>중고거래</MenuItem>
        <MenuItem onClick={LostC}>분실물찾기</MenuItem>
        <MenuItem onClick={StudyC}>스터디</MenuItem>
      </Menu>
      <SearchLoginContainer>
        <SearchInput type="text" placeholder=" 검색해보세요. " />
        {isLoggedIn ? (
          <Logout onClick={handleLogout}>로그아웃</Logout>
        ) : (
          <Login onClick={handleLogin}>로그인</Login>
        )}
        <Join onClick={JoinC}>회원가입</Join>
      </SearchLoginContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  color: #000;
  border-bottom: 1px solid #ddd;
  position: fixed;
  background-color: #fff;
  z-index: 1000;
`;

const Logo = styled.img`
  margin: 10px;
  margin-left: 40px;
  width: 4%;
`;

const Menu = styled.nav`
  margin-left: 20px;
  display: flex;
`;

const MenuItem = styled.div`
  margin-right: 25px;
  font-size: 14px;
  cursor: pointer;
`;

const SearchLoginContainer = styled.div`
  display: flex;
  margin-left: auto;
`;

const SearchInput = styled.input`
  padding: 5px;
  margin-right: 10px;
  width: 300px;
  border: none;
  border-radius: 4px;
  background-color: #eee;
`;

const Login = styled.button`
  padding: 8px 15px;
  color: #999;
  background-color: #fff;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Logout = styled.button`
  padding: 8px 15px;
  color: #999;
  background-color: #fff;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Join = styled.button`
  margin-left: 5px;
  padding: 8px 11px;
  color: #000;
  background-color: #fff;
  font-weight: 700;
  border: 1px solid #a9a9a9;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 40px;
`;

export default Header;
