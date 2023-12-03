/** 로그인 안 했을때만 입장 가능하게 하는 컴포넌트 */

import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";

const UnRequireAuth = () => {
  const { isLogin } = useSelector((state) => state.isLogin);
    console.log(isLogin)
  // 로그인을 안 했을 때
  if (!isLogin) {
    // 아래 들어가는 컴포넌트 그대로 표시.
    return <Outlet />;
  }
  // 로그인 안됐을 때 "/" << 로그인페이지 로 이동시키기
  else {
    toast.error("접근할 수 없는 페이지입니다.");
    return <Navigate to="/main" replace />;
  }
};

export default UnRequireAuth;
