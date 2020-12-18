import React, { useState } from "react";
import styled from "styled-components";
import { Read, Ref } from "../fbase";

const Container = styled.div`
  cursor: pointer;
`;

const Class = ({ ClassName }) => {
  const classRef = Ref(ClassName);
  const [clicked, setClicked] = useState(null);
  const setValue = async () => {
    const value = await Read(ClassName);
    setClicked(value);
  };
  const onClick = async (e) => {
    setClicked(!clicked);
    e.preventDefault();
    await classRef.update({ clicked: !clicked });
  };
  setInterval(setValue, 50);
  return (
    <Container
      onClick={onClick}
      style={{ backgroundColor: clicked ? "black" : "skyblue" }}
    >
      {ClassName}
    </Container>
  );
};

export default Class;
