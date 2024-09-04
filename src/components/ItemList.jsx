import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import book from "../images/books.png";
import coffee from "../images/cofffee.png";
import airpod from "../images/airpod.png";

const ItemList = () => {
  let navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");

  const ItemC = () => {
    let path = "/Trade/TradeList/TradeItem";
    navigate(path);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기서 제출 로직을 추가하세요.
    console.log("Title:", title);
    console.log("Image:", image);
    console.log("Description:", description);
    closeModal();
  };

  return (
    <Container>
      <Title>
        <Red>명당</Red>중고거래
      </Title>

      <ProductList>
        <ProductItem onClick={ItemC}>
          <div>
            <ProductTitle>인프관련 전공서적</ProductTitle>
            <ProductDescription>
              인프 강의계획서에 나와있는 전공책들 팝니다. <br />
              권당 20,000원에 팔아요!! 에눌 가능합니다..
              <br />
              ...더보기
            </ProductDescription>
          </div>
          <ProductImage src={book} alt="Product" />
        </ProductItem>
        <ProductItem>
          <div>
            <ProductTitle>먹다 남은 커피</ProductTitle>
            <ProductDescription>먹을 사람!!</ProductDescription>
          </div>
          <ProductImage src={coffee} alt="Product" />
        </ProductItem>
        <ProductItem>
          <div>
            <ProductTitle>에어팟3 한짝</ProductTitle>
            <ProductDescription>
              깨끗하고 흠집 없고 기능문제 없습니다..
              <br /> ...더보기
            </ProductDescription>
          </div>
          <ProductImage src={airpod} alt="Product" />
        </ProductItem>
      </ProductList>
      <Pagination>
        <PageNumber active="true">1</PageNumber>
        <PageNumber>2</PageNumber>
        <PageNumber>3</PageNumber>
      </Pagination>
      <ButtonContainer>
        <WriteButton onClick={openModal}>글쓰기</WriteButton>
      </ButtonContainer>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Write Post"
        style={modalStyles}
      >
        <ModalTitle>글쓰기</ModalTitle>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>제목</Label>
            <Input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>사진</Label>
            <Input type="file" onChange={handleImageChange} />
          </FormGroup>
          {image && <ImagePreview src={image} alt="Preview" />}
          <FormGroup>
            <Label>내용</Label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </FormGroup>
          <ButtonContainer>
            <SubmitButton type="submit">등록</SubmitButton>
            <CancelButton onClick={closeModal}>취소</CancelButton>
          </ButtonContainer>
        </Form>
      </Modal>
    </Container>
  );
};

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "400px",
    padding: "20px",
  },
};

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 30px;
  text-align: left;
  padding-top: 100px;
`;

const Red = styled.span`
  color: blue;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const WriteButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;

const ProductList = styled.div`
  margin-top: 30px;
`;

const ProductItem = styled.div`
  display: flex;
  border: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 20px;
  cursor: pointer;
`;

const ProductTitle = styled.h2`
  font-size: 20px;
`;

const ProductDescription = styled.p`
  margin-top: 20px;
  font-size: 14px;
`;

const ProductImage = styled.img`
  width: 200px;
  height: 130px;
  margin-left: auto;
`;

const Pagination = styled.div`
  margin-top: 30px;
  text-align: center;
`;

const PageNumber = styled.span`
  padding: 10px;
  margin-right: 10px;
  background-color: ${({ active }) => (active ? "#007bff" : "#fff")};
  color: ${({ active }) => (active ? "#fff" : "#000")};
  border: 1px solid #007bff;
  border-radius: 5px;
  cursor: pointer;
`;

const ModalTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
`;

const Textarea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  width: 100%;
  height: 200px;
  box-sizing: border-box;
`;

const ImagePreview = styled.img`
  width: 100%;
  height: auto;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 10px;
`;

const CancelButton = styled.button`
  padding: 10px 20px;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;

export default ItemList;
