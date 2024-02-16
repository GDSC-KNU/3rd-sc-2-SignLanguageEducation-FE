import "./Borad.css";
// import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";
import doctor from "../../assets/Logo1.svg";

const Board = () => {
  return (
    <>
      <div className="onboarding-background">
        <div className="text">
          <span className="topText">AI를 활용한 수화 학습 플랫폼</span>
          <h1 className="serviceName">SignLanguage</h1>
          <div className="bottomText">
            <div className="verticalLine"></div>
            <span className="onboarding_description">
              수화를 배우기 막막한데 어떡하지? 내 수화를 누군가 피드백 해줄 사람
              없나?
              <br />
              원하는 카테고리를 선택하여 수화를 학습해보세요 sign language는
              당신의 수화를 더 정교하게 학습시켜드립니다.
            </span>
          </div>
          {/* <button onClick={handleChatPage} className="btn">
            상담챗봇 바로가기
          </button> */}
        </div>
        <img id="image" src={doctor} alt="doctor" />
      </div>
      <div className="bar"></div>
    </>
  );
};

export default Board;
