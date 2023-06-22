import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { footerLinks } from "../Datas/links";
import { COLORS } from "../../styles/colors";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer__container">
        <div className="footer --inner-container">
          <div className="footer__content">
            <img src={logo} alt="logo de Classicom Musique Production" />
            <div className="footer__liens">
              <ul>
                {footerLinks.map((link) => (
                  <li key={link.id}>
                    <NavLink to={link.link}>{link.page}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer__adresse">
              <h3>Où nous trouver ?</h3>
              <p>222 rue du Lac Bleu, Mars</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footerBottom__container">
        <div className="footer --inner-container">
          <p>Tous droits réservés - {new Date().getFullYear()}</p>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  padding-top: 5rem;
  width: 100vw;
  max-width: 100%;
  .footer__container {
    background: ${COLORS.headerBackgroundColor};
    .footer {
      margin: 0 auto;

      .footer__content {
        padding: 5rem 0;
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        img {
          width: 250px;
        }

        .footer__liens {
          li {
            list-style: none;
            font-size: 1rem;

            a {
              text-decoration: none;
              color: ${COLORS.lightBlackColor};

              &:hover {
                color: ${COLORS.primaryColor};
              }
            }
          }
        }

        .footer__adresse {
          h3 {
            font-size: 1.1rem;
          }

          p {
            font-size: 1rem;
          }
        }
      }
    }
  }

  .footerBottom__container {
    background: ${COLORS.primaryColor};
    padding: 2rem 0;
    .footer {
      margin: 0 auto;
      p {
        font-size: 1rem;
        color: white;
        font-weight: bold;
        text-align: center;
      }
    }
  }
`;
