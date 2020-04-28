import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import SectionOne from "./Section1";
import SectionTwo from "./Section2";
import SectionThree from "./Section3";
import SectionFour from "./Section4";
import SideMenu from "../../../menus/SideMenu";

const SectionsContainer = () => {
  const [sectionToRender, setSectionToRender] = useState(null);

  const { sectionId } = useParams();

  useEffect(() => {
    switch (sectionId) {
      case "section-1":
        setSectionToRender(<SectionOne id={1} />);
        break;

      case "section-2":
        setSectionToRender(<SectionTwo id={2} />);
        break;

      case "section-3":
        setSectionToRender(<SectionThree id={3} />);
        break;

      case "section-4":
        setSectionToRender(<SectionFour id={4} />);
        break;

      default:
        return null;
    }
  }, [sectionId]);

  return (
    <Wrapper className="section-wrapper">
      <SideMenu />
      {sectionToRender}
    </Wrapper>
  );
};

export default SectionsContainer;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;

  ${"" /* border: 2px solid #fff; */}

  .side-menu {
    ${"" /* border: 2px solid red; */}
  }
`;
