import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        인터넷프로그래밍 <Span> 8조 </Span> 팀프로젝트
      </p>
      <Contain>
        <p>서비스 이용약관 | 개인정보 처리방침 | 팀 안내</p>
        <p>학번 김현수 | 60205205 김희수 | 60201927 도민영</p>
      </Contain>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  width: 100%;
  margin: 0;
  margin-top: 50px;
  background-color: #f0f0f0;
  color: #000;
  text-align: center;
  padding-top: 10px;
`;

const Span = styled.span`
  color: red;
`;
const Contain = styled.div`
  background-color: (0, 0, 10);
  height: 200px;
  font-size: 10px;
  text-align: left;
  padding-left: 150px;
`;
export default Footer;
