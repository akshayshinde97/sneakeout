import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: Red;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Banner = () => {
  return <Container>
      Valentine Sale 20% OFF!
  </Container>;
};

export default Banner;
