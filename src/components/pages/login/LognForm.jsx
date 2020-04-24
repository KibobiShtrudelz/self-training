import React, { useState } from "react";
import styled from "styled-components";

import Input from "../../formElements/Input";
import Button from "../../formElements/Button";

const LoginForm = ({ closeModal }) => {
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginCredentials;

  const handleFormSubmit = () => {
    // TODO: remove credentials from localStorage
    localStorage.setItem("loginCredentials", JSON.stringify(loginCredentials));
    closeModal();
  };

  return (
    <Wrapper>
      <StyledForm onSubmit={handleFormSubmit}>
        <StyledInput
          type="email"
          value={email}
          placeholder="E-mail"
          autoComplete="off"
          onChange={(e) =>
            setLoginCredentials({ ...loginCredentials, email: e.target.value })
          }
        />
        <StyledInput
          type="password"
          value={password}
          placeholder="Password"
          autoComplete="off"
          onChange={(e) =>
            setLoginCredentials({
              ...loginCredentials,
              password: e.target.value,
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
