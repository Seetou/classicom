import React from "react";
import styled from "styled-components";
import { COLORS } from "../../styles/colors";

const Heading = ({ title, subtitle }) => {
  return (
    <HeadingContainer>
      <h2 className="heading__title">{title}</h2>
      <p className="heading__subtitle">{subtitle}</p>
    </HeadingContainer>
  );
};

export default Heading;

const HeadingContainer = styled.div`
  text-align: center;
  max-width: 35%;
  margin: 4rem auto;
  .heading__title {
    font-size: 2rem;
    color: ${COLORS.primaryColor};
  }

  .heading__subtitle {
    font-size: 1.2rem;
    font-weight: 400;
    color: ${COLORS.lightBlackColor};
  }

  @media (max-width: 56.25em) {
    max-width: 60%;
    margin: 2rem auto;
  }

  @media (max-width: 31.25em) {
    max-width: 80%;
  }
`;
