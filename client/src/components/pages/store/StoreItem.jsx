import React from "react";
import styled from "styled-components";

const StoreItem = ({ title, price, stock, imgUrl }) => {
  return (
    <Wrapper>
      <Item>
        <h3>{title}</h3>
        <ItemImage src={imgUrl} alt="imij" />
        <p>Price: {price} stinchi</p>
        <p>Items in stock: {stock}</p>
      </Item>
    </Wrapper>
  );
};

export default StoreItem;

const Wrapper = styled.div`
  width: 250px;
  height: 300px;
  padding: 10px;
  position: relative;
  margin-bottom: 15px;
  border: none;
  border-radius: 5px;
  box-shadow: inset 0px 0px 1115px 0px rgba(255, 255, 255, 0.2);
  outline: none;
  box-sizing: border-box;
`;

const Item = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  word-wrap: break-word;
  box-sizing: border-box;
`;

const ItemImage = styled.img`
  width: 150px;
  height: 150px;
`;
