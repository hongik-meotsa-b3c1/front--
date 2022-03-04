import styled from "styled-components";
import homelogo from "ui/homelogo.jpeg";
import { useNavigate } from "react-router";

const TopNav = styled.nav`
  z-index: 1000;
  background-color: #f3f3f3;
  position: fixed;
  font-family: Jua;
  display: flex;
  width: 100%;
  height: 130px;
  opacity: 1;
  justify-content: space-between;
  top: 0;
`;

const Logo = styled.img`
  height: 80px;
  margin-left: 25px;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  color: black;
  cursor: pointer;
`;

const SignIn = styled.a`
  font-size: 36px;
  font-family: Jua;
  color: black;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 24px;
`;

const SignUp = styled.a`
  font-size: 36px;
  color: black;
  font-family: Jua;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 24px;
  margin-right: 60px;
`;

const LogOut = styled.a`
  font-size: 36px;
  color: black;
  font-family: Jua;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 24px;
  margin-right: 60px;
`;

const Write = styled.a`
  font-size: 36px;
  font-family: Jua;
  color: black;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 24px;
`;

const PostList = styled.a`
  font-size: 36px;
  font-family: Jua;
  color: black;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 24px;
`;


const Footer = styled.footer`
  width: 100%;
  position: fixed;
  bottom: 0px;
  height: 50px;
  font-family: Jua;
  display: flex;
  background-color: #f3f3f3;
  opacitiy: 1;
  justify-content: center;
  color: black;
  padding-top: 25px;
`;

const Children = styled.div`
  postition: absoulte;
  width: 100%;
  height: 100%;
  margin-top: 160px;
  margin-bottom: 80px;
  margin-left: 30px;
`;

const Layout = ({ children }) => {
  const navigate = useNavigate();
  return (
    <>
      <TopNav>
        <Logo onClick={() => navigate("/")} src={homelogo} />

        {localStorage.token ? (
          <>
            <PostList href='#'>글목록</PostList>
            <Write href='/posts/write'>글쓰기</Write>
            <LogOut
              onClick={() => {
                localStorage.clear();
                navigate("/accounts/login");
              }}
            >
              Log Out
            </LogOut>
            {/* 여기에 로그아웃 컴포넌트 만들어서 적용시키면 됨 */}
          </>
        ) : (
          <>
            <SignIn href="/accounts/login">Sign In</SignIn>
            <SignUp href="/accounts/classnet">Sign Up</SignUp>
          </>
        )}
      </TopNav>

      <Children>{children}</Children>
      <Footer>©2021 b3c1. All rights Reserved.</Footer>
    </>
  );
};

export default Layout;
