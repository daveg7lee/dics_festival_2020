/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";

const Loader = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #262626;
`;

const Text = styled.h1`
  font-size: 10rem;
  font-weight: 700;
  color: white;
`;

export default () => (
  <Loader>
    <Text>Loading...</Text>
  </Loader>
);
