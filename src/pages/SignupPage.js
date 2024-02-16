// import React, { useState, useEffect } from "react";
import React, { useState } from "react";
// import Axios from "axios";
// import { SmileOutlined, FrownOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
// import { Form, Input, Button, notification } from "antd";
import { Form } from "antd";
import "./SignupPage.css";

export default function Signup() {
  const history = useNavigate();
  const [fieldErrors, setFieldErrors] = useState({});

  // const onFinish = (values) => {
  //   async function fn() {
  //     const { username, password } = values;

  // setFieldErrors({});

  //     const data = { username, password };
  //     try {
  //       await Axios.post("http://localhost:8080/user/join", data);
  //       notification.open({
  //         message: "회원가입을 축하합니다",
  //         description: "로그인 페이지로 이동합니다",
  //         icon: <SmileOutlined style={{ color: "#10Bee9" }} />,
  //       });

  //       history("/LoginPage/");
  //     } catch (error) {
  //       if (error.response) {
  //         notification.open({
  //           message: "회원가입 실패",
  //           description: "아이디 및 비밀번호를 다시 확인해주세요",
  //           icon: <FrownOutlined style={{ color: "#ff3333" }} />,
  //         });

  //         const { data: fieldsErrorMessage } = error.response;

  //         setFieldErrors(
  //           Object.entries(fieldsErrorMessage).reduce(
  //             (acc, [fieldName, errors]) => {
  //               acc[fieldName] = {
  //                 validateStatus: "error",
  //                 help: errors.join(" "),
  //               };
  //               return acc;
  //             },
  //             {}
  //           )
  //         );
  //       }
  //     }
  //   }
  //   fn();
  // };

  const handleHome = () => {
    history("/");
  };

  const handleLogin = () => {
    history("/LoginPage");
  };

  return (
    <div className="signup">
      <div className="wrapper fadeInDown">
        <div id="formContent">
          {/* <!-- Tabs Titles --> */}
          <h2 className="active underlineHover" onClick={handleLogin}>
            {" "}
            LOGIN{" "}
          </h2>
          <h2 className="inactive ">Sign Up </h2>
          {/* <!-- Icon --> */}
          {/* <div className="fadeIn first">
      <img
        src="http://danielzawadzki.com/codepen/01/icon.svg"
        id="icon"
        alt="User Icon"
      />
    </div> */}

          {/* <!-- Login Form --> */}
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            // onFinish={onFinish}
          >
            <Form.Item
              className="fadeInLogin SignUpForm"
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
            >
              <input className="SignUpInputForm" placeholder="user name" />
              {/* <Input /> */}
            </Form.Item>

            <Form.Item
              className="fadeInLogin SignUpForm"
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
              <input className="SignUpInputForm" placeholder="password" />
              {/* <Input.Password /> */}
            </Form.Item>

            <Form.Item {...tailLayout}>
              <button
                className="fadeIn signupSubmit"
                type="primary"
                // htmlType="submit"
                htmltype="submit"
              >
                Sign Up
              </button>
            </Form.Item>
          </Form>

          {/* <!-- Remind Passowrd --> */}
          <div id="formFooter">
            <a className="underlineHover" href="#" onClick={handleHome}>
              Home
            </a>
          </div>
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
