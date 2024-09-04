import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Kakao from "../sub/Kakao.jsx"; // Kakao 컴포넌트를 import합니다.
import styled from "styled-components";

const H1 = styled.h1`
  padding-top: 100px;
  font-size: 30px;
`;

const Nav = styled.nav`
  background-color: black;
  position: relative;
  top: 0;
  width: 100%;
  height: 60px;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const Button = styled.button`
  color: white;
  background-color: #333;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Map = styled.div`
  padding: 50px;
  padding-top: 20px;
  width: 80%;
`;

const Controls = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
`;

const AddItem = styled.div`
  display: flex;
  margin-bottom: 20px;
  width: 100%;
  justify-content: space-between;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
`;

const AddButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  border-radius: 4px;
`;

const ListButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  width: 100%;
  margin-bottom: 20px;
  text-align: center;
`;

const LostItems = styled.div`
  margin-top: 20px;
  width: 100%;
`;

const LostItem = styled.div`
  background-color: white;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-align: center;

  &:hover {
    background-color: #f1f1f1;
  }
`;

function Lost() {
  let navigate = useNavigate();
  const [lostItems, setLostItems] = useState([
    {
      id: 1,
      name: "에어팟",
      location: { lat: 37.2239719002, lng: 127.1818908002 },
    },
    {
      id: 2,
      name: "차키",
      location: { lat: 37.2234792, lng: 127.1858017 },
    },
  ]);
  const [newItemName, setNewItemName] = useState(""); // 새로운 분실물의 이름을 담는 상태
  const [showLostItems, setShowLostItems] = useState(false); // 분실물 목록을 표시할지 여부를 저장하는 상태

  const handleClick = () => {
    let path = "/";
    navigate(path);
  };

  const handleMapClick = (latLng) => {
    if (newItemName.trim() !== "") {
      const newItem = {
        id: lostItems.length + 1,
        name: newItemName,
        location: latLng,
      };
      setLostItems([...lostItems, newItem]);
      setNewItemName(""); // 입력 필드를 초기화합니다.
    }
  };

  return (
    <div>
      <H1>분실물 지도</H1>
      <Content>
        <Map>
          <Kakao lostItems={lostItems} onMapClick={handleMapClick} />{" "}
          {/* Kakao 컴포넌트에 lostItems와 onMapClick을 전달합니다. */}
        </Map>
        <Controls>
          <AddItem>
            <Input
              type="text"
              placeholder="분실물 이름"
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
            />
            <AddButton
              onClick={() => alert("지도를 클릭하여 위치를 선택하세요")}
            >
              추가
            </AddButton>
          </AddItem>
          <ListButton
            onClick={() => setShowLostItems(!showLostItems)}
            className="list"
          >
            분실물 목록 {showLostItems ? "숨기기" : "보기"}
          </ListButton>
          {showLostItems && (
            <LostItems>
              {lostItems.map((item) => (
                <LostItem
                  key={item.id}
                  className="lost-item"
                  onClick={() => {}}
                >
                  {item.name}
                </LostItem>
              ))}
            </LostItems>
          )}
        </Controls>
      </Content>
    </div>
  );
}

export default Lost;
