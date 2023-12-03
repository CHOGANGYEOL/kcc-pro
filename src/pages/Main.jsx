import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { loginAction } from "../redux/actions/isLogin";

const Main = () => {
  const { isLogin } = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();

  return (
    <Container>
      <button onClick={() => dispatch(loginAction(false))}>로그아웃</button>
    </Container>
  );
};

const Container = styled.div``;

export default Main;
