import React from "react";
import styled from "styled-components";

const Input = (props) => {
  return (
    <Wrapper>
      <StyledInput autoComplete={props.autoComplete || null} {...props} />
    </Wrapper>
  );
};

export default Input;

const Wrapper = styled.div`
  box-sizing: border-box;
  outline: none;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 46px;
  padding-top: 2px;
  border: none;
  border-radius: 5px;
  border: 1px solid #d4d4d4;
  box-sizing: border-box;

  ::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;
