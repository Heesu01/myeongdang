import React, { useState, useEffect } from "react";
import "../css/Joinform.css";
import { useNavigate } from "react-router-dom";

function JoinForm() {
  const [id, setId] = useState("");
  const [pw1, setPw1] = useState("");
  const [pw2, setPw2] = useState("");
  const [userName, setUserName] = useState("");
  const [errors, setErrors] = useState(["", "", "", "", ""]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  function checkId() {
    if (id === "") {
      setErrors((prevErrors) => {
        const newErrors = [...prevErrors];
        newErrors[0] = "필수 정보입니다.";
        return newErrors;
      });
    } else {
      setErrors((prevErrors) => {
        const newErrors = [...prevErrors];
        newErrors[0] = "";
        return newErrors;
      });
    }
  }

  function checkPw() {
    var pwPattern = /[a-z0-9]{6,}/;
    var pwPattern2 = /[~!@#$%^&*()_+|<>?:{}]/;
    if (pw1 === "") {
      setErrors((prevErrors) => {
        const newErrors = [...prevErrors];
        newErrors[1] = "필수 정보입니다.";
        return newErrors;
      });
    } else if (!pwPattern.test(pw1) || !pwPattern2.test(pw1)) {
      setErrors((prevErrors) => {
        const newErrors = [...prevErrors];
        newErrors[1] = "8자 이상, 소문자, 숫자, 특수문자를 사용하세요.";
        return newErrors;
      });
    } else {
      setErrors((prevErrors) => {
        const newErrors = [...prevErrors];
        newErrors[1] = "";
        return newErrors;
      });
    }
  }

  function comparePw() {
    if (pw2 === pw1 && pw2 !== "") {
      setErrors((prevErrors) => {
        const newErrors = [...prevErrors];
        newErrors[2] = "";
        return newErrors;
      });
    } else if (pw2 !== pw1) {
      setErrors((prevErrors) => {
        const newErrors = [...prevErrors];
        newErrors[2] = "비밀번호가 일치하지 않습니다.";
        return newErrors;
      });
    }

    if (pw2 === "") {
      setErrors((prevErrors) => {
        const newErrors = [...prevErrors];
        newErrors[2] = "필수 정보입니다.";
        return newErrors;
      });
    }
  }

  function checkName() {
    var namePattern = /^[ㄱ-힣]+$/; // 한글만 허용
    if (userName === "") {
      setErrors((prevErrors) => {
        const newErrors = [...prevErrors];
        newErrors[3] = "";
        return newErrors;
      });
    } else if (!namePattern.test(userName)) {
      setErrors((prevErrors) => {
        const newErrors = [...prevErrors];
        newErrors[3] = "한글만 입력하세요. (공백 사용 불가)";
        return newErrors;
      });
    } else {
      setErrors((prevErrors) => {
        const newErrors = [...prevErrors];
        newErrors[3] = "";
        return newErrors;
      });
    }
  }

  useEffect(() => {
    if (isSubmitting) {
      const errorMessages = errors.filter((error) => error !== "");
      if (errorMessages.length > 0) {
        alert("모든 필드를 올바르게 작성해주세요.");
        setIsSubmitting(false);
      } else {
        // 로컬 스토리지에 데이터 저장
        localStorage.setItem("id", id);
        localStorage.setItem("password", pw1);
        localStorage.setItem("userName", userName);

        alert("회원가입이 완료되었습니다.");
        navigate("/Login");
      }
    }
  }, [errors, isSubmitting, id, pw1, userName]);

  function handleSubmit(e) {
    e.preventDefault();

    // 폼 검증 로직 실행
    checkId();
    checkPw();
    comparePw();
    checkName();

    setIsSubmitting(true);
  }

  return (
    <div id="wrap" className="wrapper">
      <form method="post" name="join" id="join" onSubmit={handleSubmit}>
        <header>
          <div id="header">
            <h1>명당 회원가입</h1>
          </div>
        </header>

        <hr className="horizontal-line" />
        <div id="container">
          <div className="row_group">
            <div className="userInput">
              <h3 className="list">
                아이디
                <span className="error_next_box" id="idError">
                  {errors[0]}
                </span>
              </h3>
              <span className="box int_id">
                <input
                  type="text"
                  id="id"
                  className="int check"
                  placeholder="사용할 이메일을 입력해주세요."
                  onChange={(e) => setId(e.target.value)}
                  onBlur={checkId}
                />
              </span>
            </div>

            <div className="userInput">
              <h3 className="list">
                비밀번호
                <span className="error_next_box int_pass" id="pwError">
                  {errors[1]}
                </span>
              </h3>
              <span className="box int_id" id="alertTxt">
                <input
                  type="password"
                  id="pw"
                  className="int check"
                  minLength="8"
                  placeholder="8자 이상, 숫자, 특수문자 사용"
                  onChange={(e) => setPw1(e.target.value)}
                  onBlur={checkPw}
                />
              </span>
            </div>

            <div className="userInput">
              <h3 className="list">
                비밀번호 재확인
                <span
                  className="error_next_box int_pass_check"
                  id="pwCheckError"
                >
                  {errors[2]}
                </span>
              </h3>
              <span className="box int_id">
                <input
                  type="password"
                  id="pwCheck"
                  className="int check"
                  minLength="8"
                  placeholder="비밀번호를 다시 입력해주세요."
                  onChange={(e) => setPw2(e.target.value)} // pw2로 설정
                  onBlur={comparePw}
                />
              </span>
            </div>
          </div>

          <div className="row_group">
            <div className="userInput">
              <h3 className="list">
                성명
                <span className="error_next_box" id="nameError">
                  {errors[3]}
                </span>
              </h3>
              <span className="box int_id">
                <input
                  type="text"
                  id="name"
                  className="int check"
                  placeholder="홍길동"
                  onChange={(e) => setUserName(e.target.value)}
                  onBlur={checkName}
                />
              </span>
            </div>

            <div className="userInput">
              <h3 className="list">
                전화번호("-" 제외)
                <span className="error_next_box" id="phoneNumError"></span>
              </h3>
              <span className="box int_id">
                <input
                  type="number"
                  id="phoneNum"
                  className="int check"
                  maxLength="11"
                  placeholder="00000000000"
                />
              </span>
            </div>
          </div>

          <div className="btn_type">
            <button type="submit" className="box btn_box">
              회원가입
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default JoinForm;
