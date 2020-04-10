import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  return (
    <Wrapper>
      <Carousel>
        <div>
          <img src="https://picsum.photos/1200/600" alt="alt" />
        </div>
        <div>
          <img src="https://picsum.photos/1200/600" alt="alt" />
        </div>
        <div>
          <img src="https://picsum.photos/1200/600" alt="alt" />
        </div>
        <div>
          <img src="https://picsum.photos/1200/600" alt="alt" />
        </div>
        <div>
          <img src="https://picsum.photos/1200/600" alt="alt" />
        </div>
      </Carousel>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - 20px;);
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

export default Home;
