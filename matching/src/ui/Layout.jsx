import styled from "styled-components";

const TopNav = styled.nav`
  z-index: 1000;
  position: fixed;
  font-family: Jua;
  display: flex;
  background-color: black;
  width: 100%;
  height: 130px;
  opacity: 1;
  justify-content: space-between;
  top: 0;
`;

const Logo = styled.a`
  font-size: 64px;
  font-family: Jua;
  margin-left: 25px;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  color: white;
`;

const SignIn = styled.a`
  font-size: 36px;
  font-family: Jua;
  color: white;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 24px;
`;

const SignUp = styled.a`
  font-size: 36px;
  color: white;
  font-family: Jua;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 24px;
  margin-right: 60px;
`;

const Footer = styled.footer`
  width: 100%;
  position: fixed;
  bottom: 0px;
  height: 50px;
  font-family: Jua;
  display: flex;
  background-color: black;
  opacitiy: 1;
  justify-content: center;
  color: white;
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

const Layout = ({children}) => (
  <>
    <TopNav>
      <Logo href="#">멋사매칭</Logo>
      <SignIn href="/accounts/login">Sign In</SignIn>
      <SignUp href="/accounts/classnet">Sign Up</SignUp>
    </TopNav>

    <Children>{children}</Children>
    <Footer>©2021 b3c1. All rights Reserved.</Footer>


  </>
);

export default Layout;
