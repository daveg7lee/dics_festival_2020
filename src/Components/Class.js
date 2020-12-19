import React, { useState } from "react";
import styled from "styled-components";
import { Read, Ref } from "../fbase";

const Container = styled.div`
  cursor: pointer;
  height: 17%;
  display: flex;
  align-items: center;
  box-shadow: 0 10px 6px -6px rgba(0, 0, 0, 0.1);
  background-color: #4c8bf5;
  transition: all 0.5s;
`;

const Box = styled.div`
  height: 100%;
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: inherit;
  font-size: 1.8rem;
  font-weight: 600;
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
  setInterval(setValue, 1000);
  return (
    <Container
      onClick={onClick}
      style={{ backgroundColor: clicked ? "#de5246" : "#4c8bf5" }}
    >
      <Box>{clicked ? "Gate Closed" : "Gate Open"}</Box>
      <Box>{destination}</Box>
      <Box>{ClassName}</Box>
      <Box>{distance}</Box>
    </Container>
  );
};

export default Class;
