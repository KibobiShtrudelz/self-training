import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";

const Dashboard = () => {
  return <Wrapper>DASHBOARD</Wrapper>;
};

const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - 20px;);
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  border: 1px solid #fff;
`;

export default Dashboard;
