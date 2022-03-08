import { Link } from "react-router-dom";
import styled from "styled-components";
import hongik from './hongik.png';

const Back = styled.div`
  background-color: gray;
  border: none;
  text-align: center;
  font-family: Jua;
  padding-right: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 360px;
  margin : 100px;

  .img{
    margin-left:225px;
  }
`;

const Main = () => (
  <div>
    <Back>
      <img className='img'src={hongik} style={{width: 200, height: 200}}/>
      <br/>
      <h2>홍익대학교 최고 친구 찾기 서비스입니다.</h2>
      <br />
      <Link to="/posts/write">이곳을 눌러 영화볼 친구들을 찾아보아요</Link>
    </Back>
  </div>
);

export default Main;
