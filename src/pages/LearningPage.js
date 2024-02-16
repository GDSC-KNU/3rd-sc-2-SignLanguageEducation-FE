import Header from "../components/Header/Header.js";
import "./LearningPage.css";
// import axios from "axios";
// import { useEffect, useState } from "react";

const LearningPage = () => {
  // const [sentence, setSentence] = useState([]);
  // const [lists, setLists] = useState([]);

  // const getPosts = () => {
  //   axios.get(`/sentence/${"축구"}`).then((res) => {
  //     console.log(res);
  //     setLists(res.data);
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
      <div className="LearningPage">
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
          <h1>영상 - 문장으로 리스트 형태로 표시 예정</h1>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default LearningPage;
