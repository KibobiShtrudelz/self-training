import React from "react";
import styled from "styled-components";

const SectionOne = () => {
  return <Wrapper className="e-store__section-1">Section 1</Wrapper>;
};

export default SectionOne;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 80px;
  padding: 15px;
  box-sizing: border-box;
`;
