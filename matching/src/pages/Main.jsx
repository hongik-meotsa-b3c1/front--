import { Link } from "react-router-dom";

const Main = () => (
  <div>
    <Link to="/search">
      <button>영화 매칭하실 분</button>
    </Link>
    <Link to="test">
      <button>제이슨 테스트중 헤헤</button>
    </Link>
    
  </div>
);

export default Main;
