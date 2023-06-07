import React, { useRef } from "react";
import { useState } from "react";
import styled from "styled-components";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import FormMessage from "./FormMessage";

const Newsletter = () => {
  const [subscriberEmail, setSuscriberEmail] = useState();
  const emailInput = useRef();
  const [formMessage, setFormMessage] = useState();
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const inputHandler = (e) => {
    setSuscriberEmail(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    try {
      if (!subscriberEmail || !subscriberEmail.match(regex)) {
        throw new Error("Email non valide.");
      }
      setFormMessage("Inscription réussie.");
      emailInput.current.value = "";
      setTimeout(() => {
        setFormMessage(null);
        setSuscriberEmail(null);
      }, 3000);
    } catch (error) {
      setFormMessage(error.message);
      setTimeout(() => setFormMessage(null), 3000);
    }
  };

  return (
    <NewsletterContainer>
      <div className="newsletter__container --inner-container">
        <div className="newsletter__header">
          <h2>Recevez notre ebook gratuit</h2>
          <p>
            Inscrivez-vous pour recevoir gratuitement notre ebook "Comment bien
            débuter au piano ?".
          </p>
        </div>
        <form className="newsletter__form">
          <input
            type="email"
            name="subscriber_email"
            placeholder="example@example.com"
            onChange={inputHandler}
            required
            ref={emailInput}
          />
          <button
            type="submit"
            className="newsletter__button"
            onClick={submitHandler}
          >
            <span>
              <BsFillArrowRightCircleFill />
            </span>
          </button>
        </form>
      </div>
      <FormMessage message={formMessage} />
    </NewsletterContainer>
  );
};

export default Newsletter;

const NewsletterContainer = styled.section`
  padding: 5rem 0;
  background: #fbf8fd;
  .newsletter__container {
    margin: 0 auto;
    background: rgb(235, 94, 85);
    background: linear-gradient(
      95deg,
      rgba(235, 94, 85, 1) 0%,
      rgba(242, 182, 69, 1) 100%
    );
    border: 1px solid #0c4541;
    border-radius: 15px;
    text-align: center;
    padding: 3rem 0;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
      rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;

    .newsletter__header {
      max-width: 80%;
      margin: 0 auto;
      h2 {
        font-size: 2rem;
        color: #000;
      }

      p {
        font-size: 1rem;
        color: #000;
        margin-top: 0.5rem;
      }
    }

    .newsletter__form {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 2rem;
      input {
        padding: 0.5rem;
        width: 30%;
        outline: none;
        border-radius: 15px;
        border: none;
      }

      .newsletter__button {
        display: flex;
        background: none;
        border: none;
        font-size: 1.5rem;
        margin-left: 0.5rem;
        border: 2px solid transparent;
        transition: all 0.3s ease-in-out;
        border: 2px solid transparent;
        &:hover {
          cursor: pointer;
          border: 2px solid white;
          border-radius: 100px;
          transform: translateX(20%);
        }

        span {
          display: flex;
          align-items: center;
        }
      }
    }
  }

  @media (max-width: 31.25em) {
    .newsletter__container {
      .newsletter__header {
        p {
          text-align: center;
        }
      }

      .newsletter__form {
        input {
          padding: 0.5rem;
          width: 50%;
          outline: none;
          border-radius: 15px;
          border: none;
        }
      }
    }
  }
`;
