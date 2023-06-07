import React from "react";
import styled from "styled-components";

const Card = ({ image, title, content, link }) => {
  return (
    <CardContainer>
      <div className="card__header">
        <img src={image} alt={title} />
      </div>
      <div className="card__body">
        <div className="card__title">
          <h3>{title}</h3>
        </div>
        <div className="card__content">
          <p>{content}</p>
        </div>
        <div className="card__button">
          <a href={link}>En savoir plus</a>
        </div>
      </div>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  .card__header {
    width: 100%;
    overflow: hidden;
    border-radius: 5px 0 0 5px;
    img {
      width: 300px;
      height: 300px;
      object-fit: cover;
      transition: all 0.3s ease-in-out;
      transform: scale(1.1);
      border-radius: 5px 0 0 5px;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
  .card__body {
    padding: 1rem;
    .card__title {
      h3 {
        font-size: 1.2rem;
      }
    }

    .card__content {
      p {
        font-size: 1rem;
        word-break: normal;
        margin: 1rem 0;
        max-width: 35rem;
      }
    }

    .card__button {
      a {
        display: inline-block;
        text-decoration: none;
        font-size: 0.75rem;
        font-weight: bold;
        background: #f2b645;
        color: #000;
        padding: 0.3rem 1rem;
        border-radius: 100px;
        transition: all 0.3s ease-in-out;

        &:hover {
          background: #daa43e;
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        }
      }
    }
  }

  @media (max-width: 56.25em) {
    .card__header {
      width: 100%;
      overflow: hidden;
      border-radius: 5px 0 0 5px;
      img {
        width: 100%;
      }
    }
  }
`;
