import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import Input from "../../formElements/Input";
import Button from "../../formElements/Button";

const RegistrationForm = ({ closeModal }) => {
  const [registrationFields, setRegistrationFields] = useState({
    first_name: "",
    last_name: "",
    address: "",
    email: "",
    password: "",
  });

  const history = useHistory();

  const {
    first_name,
    last_name,
    address,
    email,
    password,
  } = registrationFields;

  const handleInputChange = ({ target }) => {
    setRegistrationFields({
      ...registrationFields,
      [target.name]: target.value,
    });
  };

  return (
    <Wrapper>
      <StyledForm
        onSubmit={e => {
          e.preventDefault();
          history.push("/registration");
          closeModal();
        }}
      >
        <StyledInput
          type="text"
          name="first_name"
          value={first_name}
          placeholder="First name"
          autoComplete="off"
          onChange={handleInputChange}
        />
        <StyledInput
          type="text"
          name="last_name"
          value={last_name}
          placeholder="Last name"
          autoComplete="off"
          onChange={handleInputChange}
        />
        <StyledInput
          type="address"
          name="address"
          value={address}
          placeholder="Address"
          autoComplete="off"
          onChange={handleInputChange}
        />
        <StyledInput
          type="email"
          name="email"
          value={email}
          placeholder="E-mail"
          autoComplete="off"
          onChange={handleInputChange}
        />
        <StyledInput
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          autoComplete="off"
          onChange={handleInputChange}
        />
      </StyledForm>
    </Wrapper>
  );
};

export default RegistrationForm;

const Wrapper = styled.div`
  border: 1px solid #fff;
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
