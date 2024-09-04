import React, { Fragment, useState } from "react";
import "../css/Study.css";
import { useNavigate } from "react-router-dom";

const StudyMain = () => {
  let navigate = useNavigate();
  const S1 = () => {
    let path = "/Study/StudyPost";
    navigate(path);
  };
  const [selectedDept, setSelectedDept] = useState("");

  const handleDeptClick = (dept) => {
    setSelectedDept(dept);
  };
  return (
    <Fragment>
      <div className="container">
        <aside>
          <ul>
            <li onClick={() => handleDeptClick("정보통신공학과")}>
              정보통신공학과
            </li>
            <li onClick={() => handleDeptClick("컴퓨터공학과")}>
              컴퓨터공학과
            </li>
            <li onClick={() => handleDeptClick("산업경영공학과")}>
              산업경영공학과
            </li>
            <li onClick={() => handleDeptClick("디자인학부")}>디자인학부</li>
            <li onClick={() => handleDeptClick("예술학부")}>예술학부</li>
            <li onClick={() => handleDeptClick("식품영양학과")}>
              식품영양학과
            </li>
            {/* 추가적인 네비게이션 링크 */}
          </ul>
        </aside>
        <main>
          {selectedDept === "정보통신공학과" && (
            <div className="selected-dept-content">
              <h2>정보통신공학과 스터디 모집 페이지입니다</h2>
            </div>
          )}
          {selectedDept === "컴퓨터공학과" && (
            <div className="selected-dept-content1">
              <h2>컴퓨터공학과 스터디 모집 페이지입니다</h2>
            </div>
          )}
          {selectedDept === "산업경영공학과" && (
            <div className="selected-dept-content2">
              <h2>산업경영공학과 스터디 모집 페이지입니다</h2>
            </div>
          )}
          <div className="search-bar">
            <input type="search" placeholder="검색" />
          </div>
          <div className="posts-list">
            <div className="post" onClick={S1}>
              <h3>정보통신공학과 알고리즘 스터디 모집합니다!</h3>
              <p>안녕하세요. 
                정보통신공학과 알고리즘 강의 스터디 모집합니다.</p>
              <p>...더보기</p>
            </div>
            <div className="post">
              <h3>백엔드 스터디 모집</h3>
              <p>코딩 스터디</p>
              <p>...더보기</p>
            </div>
            <div className="post">
              <h3>인공지능 공부</h3>
              <p>공부해요</p>
              <p>...더보기</p>
            </div>
            <div className="post">
              <h3>같이 개발하실 분</h3>
              <p>공부하고 같이 프로젝트 만들어요.</p>
              <p>...더보기</p>
            </div>
            <div className="post">
              <h3>제목</h3>
              <p>내용</p>
            </div>
            <div className="post">
              <h3>제목</h3>
              <p>내용</p>
            </div>
          </div>
        </main>
      </div>
    </Fragment>
  );
};

export default StudyMain;
