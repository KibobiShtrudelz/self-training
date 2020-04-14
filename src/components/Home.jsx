import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  return (
    <Wrapper>
      <Carousel
        autoPlay
        stopOnHover
        useKeyboardArrows
        transitionTime={2500}
        centerMode
        showStatus={false}
        showThumbs={false}
      >
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

  .carousel-root {
    box-shadow: 0px 0px 5px 0px #fff;
  }
`;

export default Home;
