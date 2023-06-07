import React, { useState } from "react";
import styled from "styled-components";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

const SingleFaq = ({ title, response }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <FaqContainer className="faq__question">
      <div className="question__title">
        <h3>{title}</h3>
        <button onClick={() => setIsActive(!isActive)}>
          {isActive ? <FaMinusCircle /> : <FaPlusCircle />}
        </button>
      </div>

      <div className={`question__response ${isActive ? "showText" : null}`}>
        <p>{response}</p>
      </div>
    </FaqContainer>
  );
};

export default SingleFaq;

const FaqContainer = styled.article`
  margin-bottom: 1rem;
  .question__title {
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    border-bottom: 1px solid #eb5e55;

    h3 {
      font-size: 1.5rem;
      width: 100%;
    }

    button {
      border: none;
      background: none;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 1rem;
      font-size: 1.2rem;
      padding: 0.1rem;
      cursor: pointer;

      &:hover {
      }
    }
  }
  .question__response {
    height: 0;
    overflow: hidden;
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    background: #fdefee;
    padding: 0 1rem;

    p {
      font-size: 1rem;
      padding: 1rem 0;
    }
  }

  .showText {
    display: block;
    opacity: 1;
    height: auto;
  }
`;
