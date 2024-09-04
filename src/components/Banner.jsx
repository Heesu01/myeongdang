import React from "react";
import styled from "styled-components";
import logo from "../images/logo1.PNG";

const Banner = () => {
  return (
    <Div>
      <TextContainer>
        <P>
          명지대 학생들끼리
          <br />더 쉽고 간편하게
        </P>
        <P2>
          믿을 수 있는 학우들간의 교류 <br />
          함께 더 나은 대학생활을 만들어 가는 공간
        </P2>
      </TextContainer>
      <Img src={logo} />
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
  height: 350px;
  background-color: #007bff;
  padding: 50px 150px;
  position: relative; /* 부모 요소를 상대적 위치로 설정 */
  display: flex;
  justify-content: space-between; /* 이미지와 텍스트를 좌우로 배치 */
  align-items: center; /* 세로 중앙 정렬 */
`;

const TextContainer = styled.div`
  max-width: 50%; /* 텍스트 컨테이너의 최대 너비 설정 */
`;

const P = styled.p`
  color: #fff;
  font-size: 40px;
  margin: 0;
  margin-top: 100px;
  text-align: left;
`;

const P2 = styled.p`
  margin: 0;
  color: #ddd;
  font-size: 15px;
  text-align: left;
  margin-top: 10px;
`;

const Img = styled.img`
  width: 10%;
  margin-top: 70px;
  margin-right: 700px;
`;

export default Banner;
