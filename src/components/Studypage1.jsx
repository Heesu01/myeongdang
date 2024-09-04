import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Studypage1 = () => {
  let navigate = useNavigate();
  const A = () => {
    let path = "/Study/StudyPost/StudyApply";
    navigate(path);
  };
  return (
    <PostContainer>
      <Header>
        <Subtitle>모집중인 스터디</Subtitle>
        <Title>정보통신공학과 알고리즘 스터디 모집합니다!</Title>
        <AuthorInfo>
          <span>도민영</span>
          <span>작성일 24.05.20 16:54</span>
          <span>조회수 100</span>
        </AuthorInfo>
      </Header>
      <MainContent>
        <p>안녕하세요</p>
        <p>정보통신공학과 알고리즘 강의 스터디 모집합니다.</p>
        <p>
          강의에서 배우는 내용부터 코딩 테스트에 필요한 알고리즘 내용까지 같이
          공부할 예정입니다.
        </p>
        <p>많은 지원 부탁드려요!</p>
        <button onClick={A}>지원하기</button>
        <button>공유</button>
      </MainContent>
    </PostContainer>
  );
};

const PostContainer = styled.div`
  width: 60%;
  margin: auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  margin-bottom: 100px;
  text-align: center;
  margin-top: 30px;
`;

const Header = styled.header`
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
  margin-bottom: 20px;
  background-color: #fff;
`;

const Title = styled.h1`
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #000;
`;

const Subtitle = styled.h2`
  font-size: 0.9em;
  margin-bottom: 10px;
  color: #000;
  text-align: left;
`;

const AuthorInfo = styled.div`
  span {
    margin-right: 10px;
    color: #666;
    font-size: 0.9em;
  }
`;

const MainContent = styled.main`
  p {
    margin-bottom: 15px;
    line-height: 1.6;
    text-align: left;
  }

  button {
    padding: 10px 20px;
    font-size: 0.9em;
    color: #fff;
    background-color: #666;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 10px;
    margin-top: 70px;
    width: 90px;
    height: 40px;
    margin-right: 10px;
  }

  button:hover {
    background-color: #007bff;
  }
`;

export default Studypage1;
