import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import book from "../images/books.png";
import coffee from "../images/cofffee.png";
import airpod from "../images/airpod.png";
import pokemon from "../images/pokemon.png";
import cup from "../images/cup.png";
import wallet from "../images/wallet.png";

const TradeMain = () => {
  let navigate = useNavigate();
  const ListC = () => {
    let path = "/Trade/TradeList";
    navigate(path);
  };
  const ItemC = () => {
    let path = "/Trade/TradeList/TradeItem";
    navigate(path);
  };
  return (
    <Container>
      <Title>
        <Red>명당</Red>중고거래
      </Title>
      {/* <Banner></Banner> */}
      <BubbleContainer>
        <BubbleTriangle />
        <BubbleContent>팔고있어요.</BubbleContent>
      </BubbleContainer>
      <CardContainer>
        <Card onClick={ItemC}>
          <Image src={book} alt="Product 1" />
          <TitlePrice>
            <TitleText>인프관련 전공서적</TitleText>
            <PriceText>20,000</PriceText>
          </TitlePrice>
        </Card>
        <Card>
          <Image src={coffee} alt="Product 2" />
          <TitlePrice>
            <TitleText>먹다 남은 커피</TitleText>
            <PriceText>1,000</PriceText>
          </TitlePrice>
        </Card>
        <Card>
          <Image src={airpod} alt="Product 3" />
          <TitlePrice>
            <TitleText>에어팟3 한짝</TitleText>
            <PriceText>30,000</PriceText>
          </TitlePrice>
        </Card>
        <Card onClick={ListC}>
          <TitlePrice>
            <Button>+</Button>
            <TitleText>더보기</TitleText>
          </TitlePrice>
        </Card>
      </CardContainer>
      <BubbleContainerR>
        <BubbleTriangleR />
        <BubbleContentR>사고싶어요.</BubbleContentR>
      </BubbleContainerR>
      <CardContainer>
        <Card onClick={ListC}>
          <TitlePrice>
            <Button>+</Button>
            <TitleText>더보기</TitleText>
          </TitlePrice>
        </Card>
        <Card>
          <Image src={pokemon} alt="Product 1" />
          <TitlePrice>
            <TitleText>포켓몬 스티커</TitleText>
            <PriceText>제시해주세요</PriceText>
          </TitlePrice>
        </Card>
        <Card>
          <Image src={cup} alt="Product 2" />
          <TitlePrice>
            <TitleText>텀블러</TitleText>
          </TitlePrice>
        </Card>
        <Card>
          <Image src={wallet} alt="Product 3" />
          <TitlePrice>
            <TitleText>지갑</TitleText>
          </TitlePrice>
        </Card>
      </CardContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  margin: auto;
  /* background-color: #e1f3ff; */
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);  */
`;

const Title = styled.h1`
  margin: 20px;
  margin-bottom: 0px;
  font-size: 34px;
  text-align: left;
  font-weight: bold;
  margin-left: 50px;
`;
const Red = styled.span`
  font-size: 38px;
  color: blue;
  font-weight: bold;
  margin-right: 3px;
`;

const CardContainer = styled.div`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const Card = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  /* background-color:  #3c90ff26; */
  margin: 10px 30px;
  border: 1.5px solid #164a8d47;
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); */
  cursor: pointer;
  transition: transform 0.3s ease; /* 애니메이션 추가 */
  &:hover {
    transform: scale(1.05); /* 마우스 호버 시 약간 확대되는 애니메이션 */
  }
`;

const Image = styled.img`
  width: 150px;
  height: 120px;
  display: flex;
  margin: auto;
  margin-top: 20px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const TitlePrice = styled.div`
  padding: 10px;
  text-align: center;
`;

const TitleText = styled.p`
  font-weight: bold;
  margin: 5px 0;
  color: #000;
  font-size: 15px;
`;

const PriceText = styled.p`
  color: #777;
  margin: 0;
`;

const Button = styled.button`
  margin: 20px;
  font-size: 100px;
  color: #007bff84;
  width: 100px;
  height: 100px;
  /* text-align: center; */
  border-radius: 100%;
  background-color: rgba(0, 0, 255, 0);
  border: 1.5px solid #007bff84;
  cursor: pointer;
`;
// 말풍선L
const BubbleContainer = styled.div`
  margin-top: 30px;
  margin-left: 30px;
  display: flex;
  align-items: flex-start;
  width: 300px;
`;

const BubbleTriangle = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 8px 15px 8px 0;
  border-color: transparent #007bff transparent transparent;
  margin-top: 15px;
`;

const BubbleContent = styled.div`
  background-color: #007bff;
  color: white;
  /* width: 200px; */
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  font-size: 18px;
`;

//말풍선R
const BubbleContainerR = styled.div`
  margin-top: 30px;
  margin-left: auto; /* 자동으로 왼쪽 여백을 조절하여 말풍선을 오른쪽에 붙임 */
  display: flex;
  align-items: flex-start;
  flex-direction: row-reverse; /* 요소들을 오른쪽에서 왼쪽으로 배치하여 삼각형이 네모의 오른쪽에 위치하도록 함 */
  max-width: 300px;
  margin-right: 30px;
`;

const BubbleTriangleR = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 8px 0 8px 15px; /* 삼각형의 오른쪽에 위치하도록 border-width를 조정 */
  border-color: transparent transparent transparent #007bff; /* 삼각형의 오른쪽에 위치하도록 border-color를 조정 */
  margin-top: 15px;
`;

const BubbleContentR = styled.div`
  background-color: #007bff;
  color: white;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  font-size: 18px;
`;

export default TradeMain;
