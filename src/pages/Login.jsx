import React, { useEffect } from "react";
import { styled } from "styled-components";
import background from "../images/bakground.svg";
import logo from "../images/logo.svg";
import languege from "../data/languege.json";
import CustomRadio from "../components/common/CustomRadio";
import Input from "../components/common/Input";
import useValues from "../hooks/useValues";

const Login = () => {
  const { values, onChangeValues, setValues } = useValues({
    KCC_ID: "",
    KCC_PW: "",
    LANGUAGE: "kr",
  });

  useEffect(() => {
    // console.log(values);
  }, [values]);
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
            <Input id={"KCC_ID"} values={values} onChange={onChangeValues} />
            <Input
              id={"KCC_PW"}
              type="password"
              values={values}
              onChange={onChangeValues}
            />
          </div>
        </LoginForm>
      </div>
    </LoginWrap>
  );
};

const LoginForm = styled.form``;

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
