import React, { useEffect, useState } from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

export default function Login({ inputValue, handleFocus, inputClear }) {
  const [loginEmail, setLoginEmail] = useState("");
  const [isLoginEmailFocused, setIsLoginEmailFocused] = useState(false);
  const [loginpassword, setLoginPassword] = useState("");
  const [isLoginPassWordFocused, setIsLoginPassWordFocused] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);

  const loginFormSubmit = (e) => {
    e.preventDefault();
    console.log(`LoginEmail : ${loginEmail}\nLoginpassword : ${loginpassword}`);
  };

  useEffect(() => {
    loginEmail && loginpassword
      ? setIsButtonActive(true)
      : setIsButtonActive(false);
  });
  return (
    <>
      <div className={`${styles.loginBackGround}`}>
        <div className={`${styles.loginContainer}`}>
          <div className={`${styles.loginFormHeader}`}>
            <h1>HONG CHA</h1>
            <p>동시방영 신작부터 역대 인기작까지</p>
            <p>한 곳에서 편안-하게!</p>
          </div>
          <form className={`${styles.loginForm}`} action="" method="POST">
            <div
              className={`${styles.loginFormItem} ${
                isLoginEmailFocused ? styles.loginFormItemFocus : ""
              }`}
            >
              <label className={`${styles.loginFormLabel}`} htmlFor="">
                이메일
              </label>
              <div className={`relative`}>
                <input
                  className={`${styles.loginFormInput}`}
                  placeholder="이메일 입력해주세요"
                  type="LoginEmail"
                  value={loginEmail || ""}
                  onChange={(e) => {
                    inputValue(e, setLoginEmail);
                  }}
                  onFocus={() => {
                    handleFocus(isLoginEmailFocused, setIsLoginEmailFocused);
                  }}
                  onBlur={() => {
                    handleFocus(isLoginEmailFocused, setIsLoginEmailFocused);
                  }}
                />
                {isLoginEmailFocused ? (
                  <button
                    className={`${styles.loginInputButton} flex items-center rounded-full font-black absolute top-0 right-0`}
                    onMouseDown={(e) => {
                      inputClear(e, setLoginEmail);
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    X
                  </button>
                ) : null}
              </div>
            </div>
            <div
              className={`${styles.loginFormItem} ${
                isLoginPassWordFocused ? styles.loginFormItemFocus : ""
              } relative`}
            >
              <label className={`${styles.loginFormLabel}`} htmlFor="">
                비밀번호
              </label>
              <div className={`relative`}>
                <input
                  className={`${styles.loginFormInput}`}
                  placeholder="비밀번호를 입력해주세요"
                  type="Loginpassword"
                  value={loginpassword || ""}
                  onChange={(e) => {
                    inputValue(e, setLoginPassword);
                  }}
                  onFocus={() => {
                    handleFocus(
                      isLoginPassWordFocused,
                      setIsLoginPassWordFocused
                    );
                  }}
                  onBlur={() => {
                    handleFocus(
                      isLoginPassWordFocused,
                      setIsLoginPassWordFocused
                    );
                  }}
                />
                {isLoginPassWordFocused ? (
                  <button
                    className={`${styles.loginInputButton} flex items-center rounded-full font-black absolute top-0 right-0`}
                    onMouseDown={(e) => {
                      inputClear(e, setLoginPassword);
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    X
                  </button>
                ) : null}
              </div>
            </div>
            <p className={`${styles.loginFormText} mt-2`}>
              계정이 없으시다면..<Link to={"/login"}> 가입하기</Link>
            </p>
            <button
              className={`${styles.loginFormBtn} ${
                isButtonActive ? styles.loginFormBtnCompletion : ""
              }`}
              disabled={isButtonActive}
              onClick={(e) => {
                loginFormSubmit(e);
              }}
            >
              로그인
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
