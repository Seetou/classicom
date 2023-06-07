import React from "react";
import styled from "styled-components";

const FormMessage = ({ message }) => {
  return (
    <FormMessageContainer>
      <div className="form__message">
        <p>{message}</p>
      </div>
    </FormMessageContainer>
  );
};

export default FormMessage;

const FormMessageContainer = styled.div`
  margin-top: 1rem;
  .form__message {
    text-align: center;

    p {
      font-size: 1rem;
      color: #eb5e55;
      font-weight: bold;
    }
  }
`;
