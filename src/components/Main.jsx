import React from "react";
import "../css/Main.css";
import { useNavigate } from "react-router-dom";
import books from "../images/books.png";
import coffee from "../images/cofffee.png";
import airpod from "../images/airpod.png";
import pokemon from "../images/pokemon.png";
import airpod2 from "../images/airpod2.png";
import wallet from "../images/wallet.png";
import notebook from "../images/notebook.png";
import cup from "../images/cup.png";

const cardData = {
  중고거래: [
    {
      title: "인프관련 전공서적",
      image: books,
      context: "20,000원",
    },
    {
      title: "먹다 남은 커피",
      image: coffee,
      context: "1,000원",
    },
    {
      title: "에어팟",
      image: airpod,
      context: "30,000원",
    },
    {
      title: "포켓몬 스티커",
      image: pokemon,
      context: "500원",
    },
    {
      title: "텀블러",
      image: cup,
      context: "20,000원",
    },
    {
      title: "전공책",
      image: books,
      context: "30,000원",
    },
    {
      title: "애어팟",
      image: airpod2,
      context: "20,000원",
    },
  ],
  스터디: [
    {
      title: "정통 알고리즘 스터디",
      context: "알고리즘 스터디 할 사람 구해요 \n ...더보기",
    },
    { title: "백앤드 스터디 모집", context: "코딩 스터디 ...더보기" },
    { title: "코테 준비", context: "같이 코테 준비할 사람 ...더보기" },
    { title: "인공지능 공부", context: "공부해요 ...더보기" },
    {
      title: "같이 개발하실 분",
      context: "공부하고 같이 프로젝트 만들어요. ...더보기",
    },
  ],
  분실물찾기: [
    {
      title: "에어팟프로 하나",
      image: airpod2,
      context: "5공학관 앞",
    },
    {
      title: "지갑",
      image: wallet,
      context: "학생주차장 옆",
    },
    {
      title: "노트북",
      image: notebook,
      context: "명진당 4층 휴게실",
    },
    {
      title: "텀블러",
      image: cup,
      context: "명진당 4층 노열",
    },
    {
      title: "에어팟",
      image: airpod,
      context: "5공 앞 벤치",
    },
    {
      title: "스티커",
      image: pokemon,
      context: "명덕",
    },
    {
      title: "지갑",
      image: wallet,
      context: "학생주차장 옆",
    },
  ],
};

const Card = ({ title, image, context, onClick, showImage, isStudyCard }) => {
  return (
    <div
      className={`card ${isStudyCard ? "study-card" : ""}`}
      onClick={onClick}
    >
      {showImage && <img src={image} alt={title} className="card-image" />}
      <div className="card-content">
        <h3>{title}</h3>
        <p>{context}</p>
      </div>
    </div>
  );
};

const CardList = ({ category, onClick }) => {
  return (
    <div className="card-list">
      {cardData[category].map((card, index) => (
        <Card
          key={index}
          title={card.title}
          image={card.image}
          context={card.context}
          onClick={onClick}
          showImage={category !== "스터디"} // 스터디 카드는 이미지가 없음
          isStudyCard={category === "스터디"} // 스터디 카드를 식별하는 prop 추가
        />
      ))}
    </div>
  );
};

const Main = () => {
  let navigate = useNavigate();
  const T = () => {
    let path = "/Trade/TradeList/TradeItem";
    navigate(path);
  };
  const S = () => {
    let path = "/Study/StudyPost";
    navigate(path);
  };
  const L = () => {
    let path = "/LostMap";
    navigate(path);
  };
  return (
    <div className="App">
      <section>
        <h1 onClick={T}>중고거래</h1>
        <CardList category="중고거래" onClick={T} />
      </section>
      <section>
        <h1 onClick={S}>스터디</h1>
        <CardList category="스터디" onClick={S} />
      </section>
      <section>
        <h1 onClick={L}>분실물 찾기 </h1>
        <CardList category="분실물찾기" onClick={L} />
      </section>
    </div>
  );
};

export default Main;
