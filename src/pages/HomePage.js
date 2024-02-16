import Header from "../components/Header/Header.js";
import Board from "../components/Board/Board.js";

const HomePage = () => {
  return (
    <>
      <div className="header">
        {/* <Header loginState={useLogin} /> */}
        <Header />
      </div>

      <Board />

      {/* <div className="homepage">HomePage</div> */}
    </>
  );
};

export default HomePage;
