import React from "react";
import { styled } from "styled-components";
import background from "../images/bakground.svg";
import logo from "../images/logo.svg";
import languege from "../data/languege.json";
import CustomRadio from "../components/common/CustomRadio";
import Input from "../components/common/Input";
import useValues from "../hooks/useValues";
import Button from "../components/common/Button";

const Login = () => {
  const { values, onChangeValues, setValues } = useValues({
    KCC_ID: "",
    KCC_PW: "",
    LANGUAGE: "kr",
  });

  return (
    <LoginWrap>
      <div className="container">
        <img src={logo} alt="logo" />
        <LoginForm>
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
              styleType={"primary"}
              text={"Login"}
              style={{ padding: "0 2rem" }}
            />
          </div>
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
