import React, { useState, useEffect } from "react";
import styled from "styled-components";

import StoreItem from "../StoreItem";

const SectionOne = ({ id }) => {
  const [sectionItems, setSectionItems] = useState([]);

  useEffect(() => {
    const getSectionItems = async () => {
      const response = await fetch(
        `http://localhost:5000/e-store/section-${id}`
      );
      const body = await response.json();

      if (response.status !== 200) {
        throw new Error(body.message);
      }

      return body;
    };

    getSectionItems().then(items => setSectionItems(items));
  }, [id]);

  return (
    <Wrapper className="e-store__section-1">
      {sectionItems?.map(item => (
        <StyledStoreItem key={item.id} {...item} />
      ))}
    </Wrapper>
  );
};

export default SectionOne;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 15px;
  margin-left: 80px;
  box-sizing: border-box;
`;

const StyledStoreItem = styled(StoreItem)`
  margin-bottom: 10px;
`;
