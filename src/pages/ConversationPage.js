import Header from "../components/Header/Header.js";
import "./ConversationPage.css";
// import axios from "axios";
// import { useEffect, useState } from "react";

const ConversationPage = () => {
  // const [script, setScript] = useState([]);

  // const getPosts = () => {
  //   axios.get(`/script`).then((res) => {
  //     console.log(res);
  //     setScript(res.data);
  //   });
  // };

  // useEffect(() => {
  //   getPosts();
  // }, []);

  return (
    <>
      {/* 헤더 */}
      <div className="header">
        {/* <Header loginState={useLogin} /> */}
        <Header />
      </div>

      {/* 컨텐츠 */}
      <div className="ConversationPage">
        {/* ConversationPage */}

        {/* <div className="content"> */}
        {/* 왼쪽 카테고리바 영역 */}
        <div className="LeftMenu">
          {/* <h3>카테고리</h3> */}
          <ul>
            <li>축구</li>
            <li>농구</li>
            <li>야구</li>
            <li>요리</li>
            <li>영화</li>
            <li>자동차</li>
            <li>게임</li>
          </ul>
        </div>
        {/* 오른쪽 메인 컨텐츠 영역 */}
        <div className="MainContent">
          <h1>MainContent</h1>
          <h1>가상대화 스크립트 대화형태</h1>
          <h1>웹캠을 활용한 동영상 업로드 기능</h1>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default ConversationPage;
