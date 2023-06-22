import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { navlinks } from "../Datas/navlinks";
import { COLORS } from "../../styles/colors";

const Navigation = () => {
  return (
    <NavigationContainer>
      <div className="header__container --inner-container">
        <div className="header__logo__container">
          <Link to={"/"}>
            <img src={logo} alt="logo de Classicom Musique Production" />
          </Link>
        </div>
        <nav className="header__navigation__container">
          <ul>
            {navlinks.map((link) => (
              <li key={link.id}>
                <NavLink to={link.link}>{link.page}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </NavigationContainer>
  );
};

export default Navigation;

const NavigationContainer = styled.header`
  width: 100vw;
  max-width: 100%;
  position: absolute;
  top: 0;
  /* border: 1px solid red; */
  padding-top: 2rem;
  .header__container {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 4rem;
    .header__logo__container {
      width: 20%;
      img {
        width: 100%;
      }
    }

    .header__navigation__container {
      ul {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        li {
          list-style: none;
          a {
            font-size: 1rem;
            color: ${COLORS.lightBlackColor};
            font-weight: bold;
            text-decoration: none;
            transition: all 0.3s ease-in-out;
            opacity: 0.8;

            &.active,
            &:hover {
              color: ${COLORS.primaryColorDarker};
              opacity: 1;
            }
          }
        }
      }
    }
  }
`;
