import React, { useState } from "react";
import styled from "styled-components";
import Heading from "./Heading";
import faq from "../Datas/faq";
import SingleFaq from "./SingleFaq";

const Faq = () => {
  return (
    <FaqContainer>
      <Heading title={"Questions fréquemment posées"} />
      <div className="faq__container --inner-container">
        {faq.map((question) => {
          return (
            <SingleFaq
              key={question.id}
              title={question.question}
              response={question.response}
            />
          );
        })}
      </div>
    </FaqContainer>
  );
};

export default Faq;

const FaqContainer = styled.section`
  padding: 5rem 0;

  .faq__container {
    margin: 0 auto;
  }
`;
