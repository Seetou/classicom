import React from "react";
import HeadingIn from "./HeadingIn";
import styled from "styled-components";
import musicien from "../assets/images/musicien-guitarist.webp";
import { FaCheckCircle } from "@react-icons/all-files/fa/FaCheckCircle";

const Expertise = () => {
  return (
    <ExpertiseContainer>
      <div className="expertise__container --inner-container">
        <div className="expertise__content__container">
          <HeadingIn
            title={"Pourquoi nous faire confiance ?"}
            subtitle={
              "Notre équipe est composée de musiciens professionnels, talentueux et passionnés."
            }
          />
          <div className="expertise__content__paragraph">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur quibusdam veritatis illo earum soluta sint magni. A
              delectus mollitia impedit harum sint quo quod. Eveniet dolorum
              eligendi ex tempora placeat. Quia temporibus ex sint ratione quos
              vitae libero iste tenetur voluptatibus voluptatum molestias, qui a
              laboriosam dignissimos? Sequi vel repellendus, incidunt, illo
              doloremque hic laboriosam distinctio fugiat quo quod accusamus!
            </p>
          </div>
          <div className="expertise__content__list">
            <ul>
              <li>
                <span>
                  <FaCheckCircle />
                </span>
                Avantage 1
              </li>
              <li>
                <span>
                  <FaCheckCircle />
                </span>
                Avantage 2
              </li>
              <li>
                <span>
                  <FaCheckCircle />
                </span>
                Avantage 3
              </li>
              <li>
                <span>
                  <FaCheckCircle />
                </span>
                Avantage 4
              </li>
            </ul>
          </div>
          <div className="expertise__content__button">
            <a href="#">En savoir plus</a>
          </div>
        </div>
        <div className="expertise__image__container">
          <img src={musicien} alt="musicien guitarist" />
        </div>
      </div>
    </ExpertiseContainer>
  );
};

export default Expertise;

const ExpertiseContainer = styled.section`
  padding-top: 2.5rem;
  padding-bottom: 5rem;
  .expertise__container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    gap: 2rem;

    .expertise__content__container {
      width: 100%;
      .expertise__content__paragraph {
        font-size: 1rem;
        margin: 1rem 0;
      }
      .expertise__content__list {
        margin: 1rem 0;
        li {
          display: flex;
          align-items: center;
          list-style: none;
          font-size: 1rem;
          margin-bottom: 0.75rem;

          span {
            color: #eb5e55;
            margin-right: 0.75rem;
          }
        }
      }

      .expertise__content__button {
        margin-top: 2rem;
        a {
          display: inline-block;
          text-decoration: none;
          font-size: 0.75rem;
          font-weight: bold;
          background: #f2b645;
          color: #000;
          padding: 1rem 3rem;
          border-radius: 100px;
          transition: all 0.3s ease-in-out;

          &:hover {
            background: #daa43e;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
          }
        }
      }
    }

    .expertise__image__container {
      width: 50%;
      overflow: hidden;

      img {
        width: 100%;
        border-radius: 100px;
        border-right: 3px solid #eb5e55;
        object-fit: cover;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
          rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
      }
    }
  }

  @media (max-width: 43.75em) {
    .expertise__container {
      flex-direction: column;
      gap: 4rem;

      .expertise__content__container {
        .expertise__content__button {
          display: flex;
          justify-content: center;
        }
      }
    }
  }
`;
