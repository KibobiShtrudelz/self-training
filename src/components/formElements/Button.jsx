import React from "react";
import styled from "styled-components";

const Button = ({ type, text, icon, disabled }) => {
  return (
    <Wrapper>
      <StyledButton type={type} disabled={disabled}>
        {icon && <span className={icon} />}
        {text}
      </StyledButton>
    </Wrapper>
  );
};

export default Button;

const Wrapper = styled.div``;

const StyledButton = styled.button`
  width: 100%;
  height: 46px;
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  background-color: #25dd76;

  span {
    margin-right: 5px;
  }
`;
