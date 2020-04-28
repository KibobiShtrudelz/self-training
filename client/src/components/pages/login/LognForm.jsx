import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import Input from "../../formElements/Input";
import Button from "../../formElements/Button";

const LoginForm = ({ closeModal }) => {
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  const history = useHistory();

  const { email, password } = loginCredentials;

  return (
    <Wrapper>
      <StyledForm
        onSubmit={e => {
          e.preventDefault();
          history.push("/login");
          closeModal();
        }}
      >
        <StyledInput
          type="email"
          name="email"
          value={email}
          placeholder="E-mail"
          autoComplete="off"
          onChange={({ target }) =>
            setLoginCredentials({ ...loginCredentials, email: target.value })
          }
        />
        <StyledInput
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          autoComplete="off"
          onChange={({ target }) =>
            setLoginCredentials({
              ...loginCredentials,
              password: target.value,
            })
          }
        />
        <Button type="submit" text="Login" icon="icon-user-check" />
      </StyledForm>
    </Wrapper>
  );
};

export default LoginForm;

const Wrapper = styled.div`
  max-width: 500px;
  max-height: 500px;
  box-sizing: border-box;
`;

const StyledForm = styled.form`
  padding: 10px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const StyledInput = styled(Input)`
  font-size: 18px;
  text-indent: 10px;
  margin-bottom: 15px;
`;
