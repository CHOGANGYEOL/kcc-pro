import { useSelector } from "react-redux";

const Main = () => {
  const { isLogin } = useSelector((state) => state.isLogin);
  console.log("Main:", isLogin);
  return <></>;
};

export default Main;
