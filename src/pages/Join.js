import React, { useEffect, useState } from "react";
import styles from "./Join.module.css";

export default function Join({ inputValue, handleFocus, inputClear }) {
  const [email, setEmail] = useState("");
  const [emailCheck, setEmailCheck] = useState(false);
  const [isEmailWarringTextView, setIsEmailWarringTextView] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState(false);
  const [isPassWordFocused, setIsPassWordFocused] = useState(false);
  const [isPasswordWarringTextView, setIsPasswordWarringTextView] =
    useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [isConfirmPassWordFocused, setIsConfirmPassWordFocused] =
    useState(false);

  const [nickName, setNickName] = useState("");
  const [isNickNameFocused, setIsNickNameFocused] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPhoneNumberFocused, setIsPhoneNumberFocused] = useState("");

  const [isButtonActive, setIsButtonActive] = useState(false);

  const emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const passwordReg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;

  const phoneNumberInputValueReg = (e, setValue) => {
    e.preventDefault();
    setValue(
      e.target.value
        .replace(/[^0-9]/g, "")
        .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
        .replace(/(\-{1,2})$/g, "")
    );
  };

  const valueRegCheck = (reg, value) => {
    return reg.test(value);
  };
  const isValidEmail = () => {
    valueRegCheck(emailReg, email) ? setEmailCheck(true) : setEmailCheck(false);
    setIsEmailWarringTextView(!emailCheck);
  };
  const isValidPassword = () => {
    password === confirmPassword &&
    password !== "" &&
    confirmPassword !== "" &&
    valueRegCheck(passwordReg, password)
      ? setPasswordCheck(true)
      : setPasswordCheck(false);
    setIsPasswordWarringTextView(!passwordCheck);
  };

  const joinFormSubmit = (e) => {
    e.preventDefault();
    console.log(
      `email : ${email}\npassword : ${password}\nnickName : ${nickName}`
    );
  };

  useEffect(() => {
    isValidPassword();
  }, [password, confirmPassword, isPassWordFocused, isConfirmPassWordFocused]);
  useEffect(() => {
    isValidEmail();
  }, [email, isEmailFocused]);

  useEffect(() => {
    if (!password && !confirmPassword) {
      setIsPasswordWarringTextView(false);
    }
    if (!email) {
      setIsEmailWarringTextView(false);
    }
  });
  useEffect(() => {
    emailCheck && passwordCheck && nickName
      ? setIsButtonActive(true)
      : setIsButtonActive(false);
    console.log(isButtonActive);
  });

  return (
    <div
      className={`${styles.joinBackGround} flex flex-col justify-center items-center w-screen h-screen`}
    >
      <div
        className={`${styles.joinContainer} flex flex-col justify-center items-center rounded-lg`}
      >
        <div className={`${styles.joinFormHeader} text-center font-black`}>
          <h1>HONG CHA</h1>
          <p>회원가입</p>
        </div>
        <form className={`${styles.joinForm}`} action="" method="POST">
          <div
            className={`${styles.joinFormItem} ${
              isEmailFocused ? styles.joinFormItemFocus : ""
            }`}
          >
            <label className={`${styles.joinFormLabel}`} htmlFor="">
              이메일
            </label>
            <div className={`${styles.joinFormInputBox}`}>
              <input
                className={`${styles.joinFormInput} `}
                placeholder="이메일 입력해주세요"
                type="email"
                value={email || ""}
                onChange={(e) => {
                  inputValue(e, setEmail);
                }}
                onFocus={() => {
                  handleFocus(isEmailFocused, setIsEmailFocused);
                }}
                onBlur={() => {
                  handleFocus(isEmailFocused, setIsEmailFocused);
                }}
              />
              {isEmailFocused ? (
                <button
                  className={`${styles.joinInputButton} flex items-center rounded-full font-black`}
                  onMouseDown={(e) => {
                    inputClear(e, setEmail);
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
          {isEmailWarringTextView ? (
            <div className={`${styles.joinFormInputWarring}`}>
              이메일을 확인해주세요
            </div>
          ) : null}
          <div
            className={`${styles.joinFormItem} ${
              isNickNameFocused ? styles.joinFormItemFocus : ""
            }`}
          >
            <label className={`${styles.joinFormLabel}`} htmlFor="">
              이름
            </label>
            <div className={`relative ${styles.joinFormInputBox}`}>
              <input
                className={`${styles.joinFormInput}`}
                placeholder="이름을 입력해주세요"
                type="text"
                value={nickName || ""}
                onChange={(e) => {
                  inputValue(e, setNickName);
                }}
                onFocus={() => {
                  handleFocus(isNickNameFocused, setIsNickNameFocused);
                }}
                onBlur={() => {
                  handleFocus(isNickNameFocused, setIsNickNameFocused);
                }}
              />
              {isNickNameFocused ? (
                <button
                  className={`${styles.joinInputButton} flex items-center rounded-full font-black`}
                  onMouseDown={(e) => {
                    inputClear(e, setNickName);
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
            className={`${styles.joinFormItem} ${
              isPhoneNumberFocused ? styles.joinFormItemFocus : ""
            }`}
          >
            <label className={`${styles.joinFormLabel}`} htmlFor="">
              전화번호
            </label>
            <div className={`${styles.joinFormInputBox}`}>
              <input
                className={`${styles.joinFormInput}`}
                placeholder="전화번호를 입력해주세요"
                type="text"
                maxLength={`13`}
                value={phoneNumber || ""}
                onChange={(e) => {
                  phoneNumberInputValueReg(e, setPhoneNumber);
                }}
                onFocus={() => {
                  handleFocus(isPhoneNumberFocused, setIsPhoneNumberFocused);
                }}
                onBlur={() => {
                  handleFocus(isPhoneNumberFocused, setIsPhoneNumberFocused);
                }}
              />
              {isPhoneNumberFocused ? (
                <button
                  className={`${styles.joinInputButton} flex items-center rounded-full font-black`}
                  onMouseDown={(e) => {
                    inputClear(e, setPhoneNumber);
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
            className={`${styles.joinFormItem} ${
              isPassWordFocused ? styles.joinFormItemFocus : ""
            } flex flex-col w-80`}
          >
            <label className={`${styles.joinFormLabel}`} htmlFor="">
              비밀번호
            </label>
            <div className={`${styles.joinFormInputBox}`}>
              <input
                className={`${styles.joinFormInput} m-0 p-0`}
                placeholder="비밀번호를 입력해주세요"
                type="password"
                value={password || ""}
                onChange={(e) => {
                  inputValue(e, setPassword);
                }}
                onFocus={() => {
                  handleFocus(isPassWordFocused, setIsPassWordFocused);
                }}
                onBlur={() => {
                  handleFocus(isPassWordFocused, setIsPassWordFocused);
                }}
              />
              {isPassWordFocused ? (
                <button
                  className={`${styles.joinInputButton} flex items-center rounded-full font-black`}
                  onMouseDown={(e) => {
                    inputClear(e, setPassword);
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
          {isPasswordWarringTextView ? (
            <div className={`${styles.joinFormInputWarring}`}>
              비밀번호를 확인해주세요
            </div>
          ) : null}
          <div
            className={`${styles.joinFormItem} ${
              isConfirmPassWordFocused ? styles.joinFormItemFocus : ""
            }`}
          >
            <label className={`${styles.joinFormLabel}`} htmlFor="">
              비밀번호 확인
            </label>
            <div className={`${styles.joinFormInputBox}`}>
              <input
                className={`${styles.joinFormInput}`}
                placeholder="비밀번호를 한번 더 입력해주세요"
                type="password"
                value={confirmPassword || ""}
                onChange={(e) => {
                  inputValue(e, setConfirmPassword);
                }}
                onFocus={() => {
                  handleFocus(
                    isConfirmPassWordFocused,
                    setIsConfirmPassWordFocused
                  );
                }}
                onBlur={() => {
                  handleFocus(
                    isConfirmPassWordFocused,
                    setIsConfirmPassWordFocused
                  );
                }}
              />
              {isConfirmPassWordFocused ? (
                <button
                  className={`${styles.joinInputButton} flex items-center rounded-full font-black`}
                  onMouseDown={(e) => {
                    inputClear(e, setConfirmPassword);
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
          <button
            className={`${styles.joinFormBtn} ${
              isButtonActive ? styles.joinFormBtnCompletion : ""
            } flex items-center justify-cente w-full`}
            type="submit"
            disabled={!isButtonActive}
            onClick={(e) => {
              joinFormSubmit(e);
            }}
          >
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
}
