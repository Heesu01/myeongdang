import React, { useState } from "react";
import styled from "styled-components";
import book from "../images/books.png";

const Item = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [replyTexts, setReplyTexts] = useState([]);
  const userId = localStorage.getItem("id");

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleReplyChange = (e, index) => {
    const updatedReplyTexts = [...replyTexts];
    updatedReplyTexts[index] = e.target.value;
    setReplyTexts(updatedReplyTexts);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      setComments([
        ...comments,
        { author: userId, text: newComment, replies: [] },
      ]);
      setReplyTexts([...replyTexts, ""]);
      setNewComment("");
    }
  };

  const handleCommentDelete = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    const updatedReplyTexts = [...replyTexts];
    updatedReplyTexts.splice(index, 1);
    setComments(updatedComments);
    setReplyTexts(updatedReplyTexts);
  };
  const handleReplySubmit = (commentIndex) => {
    const replyText = replyTexts[commentIndex];
    if (replyText && replyText.trim()) {
      const updatedComments = [...comments];
      updatedComments[commentIndex].replies.push({
        author: userId,
        text: replyText,
      });
      setComments(updatedComments);
      const updatedReplyTexts = [...replyTexts];
      updatedReplyTexts[commentIndex] = ""; // 답글 작성 후 입력값 초기화
      setReplyTexts(updatedReplyTexts);
    }
  };

  return (
    <Container>
      <Title>
        <Red>명당</Red>중고거래
      </Title>
      <ProductContainer>
        <ProductImage src={book} alt="Product" />
        <ProductDescription>
          <AuthorName>작성자: 60202020</AuthorName>
          <ProductTitle>제목: 인프관련 전공서적</ProductTitle>
          <ProductContent>
            내용: 인프 강의계획서에 나와있는 전공책들 팝니다. <br />
            권당 20,000원에 팔아요!! 에눌 가능합니다..
          </ProductContent>
          <ProductPrice>가격: 20,000원</ProductPrice>
        </ProductDescription>
      </ProductContainer>

      <CommentSection>
        <CommentList>
          {comments.map((comment, index) => (
            <div key={index}>
              <CommentItem>
                {/* 댓글 내용 */}
                <CommentText>
                  <CommentAuthor>{comment.author}:</CommentAuthor>{" "}
                  {comment.text}
                </CommentText>
                <DeleteButton onClick={() => handleCommentDelete(index)}>
                  삭제
                </DeleteButton>
              </CommentItem>
              {/* 답글에 대한 출력 */}
              {comment.replies.map((reply, replyIndex) => (
                <div key={replyIndex}>
                  <ReplyItem>
                    <ReplyText>
                      <ReplyAuthor>{reply.author}:</ReplyAuthor> {reply.text}
                    </ReplyText>
                  </ReplyItem>
                  {/* 답글과 댓글 사이에 줄 추가 */}
                  {replyIndex !== comment.replies.length - 1 && <Divider />}
                </div>
              ))}
              {/* 답글 입력 칸 */}
              <ReplyInput
                placeholder="답글을 입력하세요"
                value={replyTexts[index] || ""}
                onChange={(e) => handleReplyChange(e, index)}
              />
              <ReplyButton onClick={() => handleReplySubmit(index)}>
                답글 작성
              </ReplyButton>
              {/* 댓글과 답글 사이에 줄 추가 */}
              {index !== comments.length - 1 && <Divider />}
            </div>
          ))}
        </CommentList>
        {/* 댓글 입력 칸 */}
        <CommentInput
          placeholder="댓글을 입력하세요"
          value={newComment}
          onChange={handleCommentChange}
        />
        <CommentButton onClick={handleCommentSubmit}>댓글 작성</CommentButton>
      </CommentSection>
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 30px;
  padding-top: 100px;
  text-align: left;
`;

const Red = styled.span`
  color: blue;
`;

const ProductContainer = styled.div`
  display: flex;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  height: 300px;
`;

const ProductImage = styled.img`
  margin: 30px;
  width: 300px;
  height: auto;
`;

const ProductDescription = styled.div`
  margin: 30px;
  margin-left: 0;
  padding: 20px;
`;

const AuthorName = styled.p`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ProductTitle = styled.h2`
  font-size: 22px;
  margin-bottom: 10px;
`;

const ProductContent = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 10px;
`;
const CommentSection = styled.div`
  margin-top: 40px;
`;

const CommentInput = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  margin-bottom: 10px;
  margin-top: 20px;
`;

const CommentItem = styled.div`
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
  display: flex;
  align-items: flex-start;
`;

const ReplyItem = styled.div`
  margin-left: 20px;
  margin-top: 10px;
  padding-left: 10px;
  border-left: 2px solid #9b9b9b;
`;

const CommentText = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
`;

const ReplyText = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
  text-align: left;
  margin-left: 5px;
`;

const CommentAuthor = styled.span`
  font-weight: bold;
`;

const ReplyAuthor = styled.span`
  font-weight: bold;
  color: #9b9b9b;
`;

const ReplyInput = styled.input`
  margin-left: 10px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const DeleteButton = styled.button`
  background-color: #2d2d2d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 5px 10px;
  margin-left: auto;
`;

const CommentList = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
`;

const CommentButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
  float: right;
`;

const ReplyButton = styled.button`
  padding: 5px 10px;
  background-color: #2d2d2d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
`;
const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ddd;
  margin: 10px 0;
`;
export default Item;
