import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  return (
    <Wrapper>
      <Carousel
        autoPlay
        centerMode
        stopOnHover
        infiniteLoop
        useKeyboardArrows
        showStatus={false}
        showThumbs={false}
        transitionTime={2500}
        centerSlidePercentage={80}
      >
        <div>
          <img src="https://picsum.photos/1200/600?random=1" alt="alt" />
        </div>
        <div>
          <img src="https://picsum.photos/1200/600?random=2" alt="alt" />
        </div>
        <div>
          <img src="https://picsum.photos/1200/600?random=3" alt="alt" />
        </div>
        <div>
          <img src="https://picsum.photos/1200/600?random=4" alt="alt" />
        </div>
        <div>
          <img src="https://picsum.photos/1200/600?random=5" alt="alt" />
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
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px #171717;

    .slider-wrapper {
      border-radius: 5px;
    }
  }
`;

export default Home;
