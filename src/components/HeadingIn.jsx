import React from "react";
import styled from "styled-components";
import { COLORS } from "../../styles/colors";

const HeadingIn = ({ title, subtitle }) => {
  return (
    <HeadingContainer>
      <h2 className="heading__title">{title}</h2>
      <p className="heading__subtitle">{subtitle}</p>
    </HeadingContainer>
  );
};

export default HeadingIn;

const HeadingContainer = styled.div`
  text-align: left;
  /* max-width: 35%; */
  /* margin: 4rem auto; */
  margin-bottom: 2rem;
  .heading__title {
    font-size: 2rem;
    color: ${COLORS.primaryColor};
  }

  .heading__subtitle {
    font-size: 1.2rem;
    font-weight: 400;
    color: ${COLORS.lightBlackColor};
  }

  @media (max-width: 43.75em) {
    text-align: center;
  }
`;
