import "./Header.css";
import logo from "../../assets/Logo2.svg";
// import Profile from "../../img/profile.svg";
import { Link, NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";
// import Login from "../../pages/Login.jsx";

function Header() {
  return (
    <>
      <div id="header">
        <Link to="/">
          <img id="header_logo" src={logo} alt="allyeozoong logo" />
        </Link>

        <NavLink
          className="header_menu"
          //   className={({ isActive }) => {
          //     return isActive ? "header_menu_selected" : "header_menu";
          //   }}
          to="/LearningPage"
        >
          수화 학습
        </NavLink>

        <NavLink
          className="header_menu"
          //   className={({ isActive }) => {
          //     return isActive ? "header_menu_selected" : "header_menu";
          //   }}
          to="/ConversationPage"
        >
          가상 대화
        </NavLink>

        <div id="login">
          <Link to="/SignupPage">
            <button className="loginbutton">회원가입</button>
          </Link>
          <Link to="/LoginPage">
            <button className="loginbutton">로그인</button>
          </Link>
        </div>
      </div>{" "}
      {/*header*/}
    </>
  );
}

export default Header;
