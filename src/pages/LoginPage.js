// import React, { useState, useEffect } from "react";
import React, { useState } from "react";
import axios from "axios";
import { SmileOutlined, FrownOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
// import { Card, Form, Input, Button, notification } from "antd";
import { Form, notification } from "antd";
// import { setToken, useAppContext } from "store";
// import { setToken } from "store";
// import { useDispatch } from "react-redux";
import "./LoginPage.css";

export default function Login() {
  const history = useNavigate();
  // const { dispatch } = useAppContext();
  // const { dispatch } = useDispatch();
  const [fieldErrors, setFieldErrors] = useState({});

  const { from: loginRedirectUrl } = {
    from: { pathname: "/" },
  };

  const onFinish = (values) => {
    async function fn() {
      const { username, password } = values;
      console.log(values, "아디 비번 확인용");

      setFieldErrors({});

      const data = { username, password };
      try {
        const response = await axios
          .post("/api/user/login", {
            userName: data.username,
            password: data.password,
          })
          .then((res) => {
            console.log(res);
            // console.log(res.headers);
            console.log("비상", res.headers.accesstoken);
            localStorage.setItem("token", res.headers.accesstoken);
          });

        const {
          data: { token: jwtToken },
        } = response;
        console.log("토큰데이터 확인 : ", data);

        //ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ여기해결해야함ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
        // dispatch(setToken({ jwtToken, username }));
        //setJwtToken(jwtToken);
        notification.open({
          message: "로그인 성공",
          icon: <SmileOutlined style={{ color: "#10Bee9" }} />,
        });

        history(loginRedirectUrl);
      } catch (error) {
        if (error.response) {
          notification.open({
            message: "로그인 실패",
            description: "아이디 및 비밀번호를 다시 확인해주세요",
            icon: <FrownOutlined style={{ color: "#ff3333" }} />,
          });

          const { data: fieldsErrorMessage } = error.response;

          setFieldErrors(
            Object.entries(fieldsErrorMessage).reduce(
              (acc, [fieldName, errors]) => {
                acc[fieldName] = {
                  validateStatus: "error",
                  help: errors.join(" "),
                };
                return acc;
              },
              {}
            )
          );
        }
      }
    }
    fn();
  };

  const handleHome = () => {
    history("/");
  };

  const handleSignUp = () => {
    history("/SignupPage");
  };

  return (
    <div className="login fadeInDownLogin">
      <div id="formContentLogin">
        {/* <!-- Tabs Titles --> */}
        <h2 className="activeLogin"> LOGIN </h2>
        <h2
          className="inactiveSignup underlineHoverLogin"
          onClick={handleSignUp}
        >
          Sign Up
        </h2>
        {/* <!-- Icon --> */}
        {/* <div className="fadeInLogin first">
        <img
          src="http://danielzawadzki.com/codepen/01/icon.svg"
          id="icon"
          alt="User Icon"
        />
      </div> */}
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            className="fadeInLogin idPasswordForm"
            //   label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "5글자 이상 입력하세요",
                min: 5,
              },
            ]}
            hasFeedback
            {...fieldErrors.username}
            // {...fieldErrors.non_field_errors}
          >
            <input className="InputForm" placeholder="user name" />
            {/* <Input /> */}
          </Form.Item>

          <Form.Item
            className="fadeInLogin idPasswordForm"
            //   label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            {...fieldErrors.password}
          >
            {/* <Input.Password /> */}
            <input className="InputForm" placeholder="password" />
          </Form.Item>

          <Form.Item className="LoginButton" {...tailLayout}>
            <button
              className="fadeInLogin loginSubmit"
              type="primary"
              //   htmlType="submit"
              htmltype="submit"
            >
              Log In
            </button>
          </Form.Item>
        </Form>
        <div id="formFooterLogin">
          <a className="underlineHoverLogin" href="#" onClick={handleHome}>
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
