import React from "react";
import styled from "styled-components";
import headerImage from "../assets/images/happy_student.webp";

const Header = () => {
  return (
    <HeaderContainer>
      <div className="header__container --inner-container">
        {/* TITLE */}
        <div className="header__main__title__container">
          <h1 className="header__main__title">
            Cours de musique pour débutants & professionnels
          </h1>
          <h2 className="header__subtitle">
            Apprenez l'art de la production musicale avec nos cours de musique,
            et développez vos talents de musicien et/ou de chantre.
          </h2>
          {/* BUTTON */}
          <div className="header__button">
            <a href="#">Découvrir</a>
          </div>
        </div>
        {/* <div className="header__adjust__box"></div> */}
      </div>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.section`
  background-image: url(${headerImage});
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  /* padding: 15rem 0; */
  height: 100vh;
  display: flex;
  align-items: center;
  .header__container {
    margin: 0 auto;
    .header__main__title__container {
      max-width: 50vw;

      .header__main__title {
        font-size: 3.5rem;
      }

      .header__subtitle {
        font-size: 1.5rem;
        font-weight: 400;
      }

      .header__button {
        margin-top: 3rem;
        a {
          display: inline-block;
          text-decoration: none;
          color: #fff;
          font-size: 1.2rem;
          background-color: #eb5e55;
          padding: 1rem 3rem;
          border-radius: 100px;
          font-weight: bold;
          transition: all 0.3s ease-in-out;
          &:hover {
            background: #d4554d;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
          }
        }
      }
    }

    .header__adjust__box {
      width: 100%;
    }
  }

  @media (max-width: 50em) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .header__container {
      .header__main__title__container {
        max-width: 100%;
        text-align: center;
      }
    }
  }

  @media (max-width: 31.25em) {
    .header__container {
      .header__main__title__container {
        .header__main__title {
          font-size: 2.5rem;
        }

        .header__subtitle {
          font-size: 1.5rem;
          font-weight: 400;
          margin-top: 1rem;
        }
      }
    }
  }
`;
