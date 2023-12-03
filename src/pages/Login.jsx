import { styled } from "styled-components";
import background from "../images/bakground.svg";
import logo from "../images/logo.svg";
import languege from "../data/languege.json";
import CustomRadio from "../components/common/CustomRadio";
import Input from "../components/common/Input";
import useValues from "../hooks/useValues";
import Button from "../components/common/Button";
import CustomCheckbox from "../components/common/CustomCheckbox";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { loginAction } from "../redux/actions/isLogin";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { values, onChangeValues, setValues } = useValues({
    KCC_ID: "",
    KCC_PW: "",
    LANGUAGE: "kr",
    isIDSave: [],
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const TEST_ID = {
    ID: "test1",
    PW: "1234",
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (values.KCC_ID === TEST_ID.ID && values.KCC_PW === TEST_ID.PW) {
      dispatch(loginAction(true));
      navigate("/main");
    } else {
      toast.error("로그인에 실패하였습니다.");
    }
  };

  return (
    <LoginWrap>
      <div className="container">
        <img src={logo} alt="logo" />
        <LoginForm onSubmit={onSubmit}>
          <CustomRadio
            data={languege}
            id={"LANGUAGE"}
            values={values}
            setValues={setValues}
          />

          <div className="loginBox">
            <div className="inputBox">
              <Input
                id={"KCC_ID"}
                values={values}
                onChange={onChangeValues}
                placeholder={"ID"}
              />
              <Input
                id={"KCC_PW"}
                type="password"
                values={values}
                onChange={onChangeValues}
                placeholder={"password"}
              />
            </div>

            <Button
              type={"submit"}
              styleType={"primary"}
              text={"Login"}
              style={{ padding: "0 2rem" }}
            />
          </div>
          <CustomCheckbox
            data={[
              {
                idx: 1,
                value: "Remember-me",
                label: "Remember-me",
              },
            ]}
            id={"isIDSave"}
            values={values}
            setValues={setValues}
          />
        </LoginForm>
      </div>
    </LoginWrap>
  );
};

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  .loginBox {
    display: flex;
    gap: 16px;
    .inputBox {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  }
`;

const LoginWrap = styled.div`
  background-image: url(${background});
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  .container {
    width: 100%;
    max-width: 1024px;
    display: flex;
    align-items: center;
    gap: 106px;
  }
`;

export default Login;
