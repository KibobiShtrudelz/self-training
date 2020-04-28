import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SectionOne = () => {
  const [sectionData, setSectionData] = useState([]);
  console.log("sectionData", sectionData);

  const getSectionData = async () => {
    const response = await fetch("http://localhost:5000/e-store/section-1");
    const body = await response.json();

    if (response.status !== 200) {
      throw new Error(body.message);
    }

    return body;
  };

  useEffect(() => {
    getSectionData().then(data => setSectionData(data));
  }, [sectionData]);

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
