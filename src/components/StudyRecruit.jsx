import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function StudyRecruit() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  let navigate = useNavigate();
  const S = () => {
    let path = "/Study";
    navigate(path);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Introduction:", introduction);
    // Set isSubmitted to true to show the success message
    setIsSubmitted(true);
  };


  if (isSubmitted) {
    return (
      <SubmissionSuccessContainer>
        <h1>제출이 완료되었습니다</h1>
        <SuccessButton onClick={S}>
          스터디 메인페이지로 돌아가기
        </SuccessButton>
      </SubmissionSuccessContainer>
    );
  }

  return (
    <StudyRecruitContainer>
      <h1>신청 페이지</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">이름</Label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="phone">전화번호</Label>
          <Input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="introduction">간단한 자기소개를 해주세요.</Label>
          <Textarea
            id="introduction"
            value={introduction}
            onChange={(e) => setIntroduction(e.target.value)}
            required
          ></Textarea>
        </FormGroup>
        <Button type="submit">제출</Button>
      </Form>
    </StudyRecruitContainer>
  );
}

const StudyRecruitContainer = styled.div`
  width: 60%;
  margin: auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  padding-top: 200px;
  text-align: center;
`;

const Form = styled.form`
  display: inline-block;
  text-align: left;
  margin-top: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 300px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  width: 300px;
  height: 100px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  margin-top: 30px;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  background-color: #666;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 30px;

  &:hover {
    background-color: #007bff;
  }
`;

const SubmissionSuccessContainer = styled.div`
  font-family: sans-serif;
  text-align: center;
  padding-top: 200px;
  height: 500px;
`;

const SuccessButton = styled(Button)`
  width: 300px;
  margin-bottom: 30px;
`;

export default StudyRecruit;
