import React, { useState } from "react";
import styled from "styled-components";
import { Read, Ref } from "../fbase";

const Container = styled.div`
  height: 17%;
  display: flex;
  align-items: center;
  background-color: #4c8bf5;
  transition: all 1.2s;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.2) 0px 18px 36px -18px inset;
`;

const Box = styled.div`
  :nth-child(3) button {
    cursor: pointer;
    border: none;
    width: 30%;
    height: 50%;
    background: none;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
    outline: 0;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 5px;
  }
  :nth-child(3) {
    justify-content: space-evenly;
  }
  height: 100%;
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: inherit;
  font-size: 1.8rem;
  font-weight: 800;
  border-right: 2px solid rgba(0, 0, 0, 0.1);
`;

const Class = ({ ClassName, value, destination, distance }) => {
  const classRef = Ref(ClassName);
  const [clicked, setClicked] = useState(value);
  const onClick = async (e) => {
    setClicked(!clicked);
    e.preventDefault();
    await classRef.update({ clicked: !clicked });
  };
  const setValue = async () => {
    const value = await Read(ClassName);
    setClicked(value);
  };
  setInterval(setValue, 1500);
  return (
    <Container
      style={{
        backgroundColor: clicked ? "rgba(250, 27, 35, 0.7)" : "#0553fc",
      }}
    >
      <Box>{clicked ? "Gate Closed" : "Gate Open"}</Box>
      <Box>{destination}</Box>
      <Box>
        {ClassName}
        <button onClick={onClick}>{clicked ? "Open" : "Close"}</button>
      </Box>
      <Box>{distance}</Box>
    </Container>
  );
};

export default Class;
