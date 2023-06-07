import React from "react";
import styled from "styled-components";
import Heading from "./Heading";
import services from "../Datas/services";
import Card from "./Card";
const Services = () => {
  return (
    <ServicesContainer>
      <Heading
        title={"Nos Services"}
        subtitle={
          "Particuliers et Entreprises, Classicom Musique Production vous propose les meilleurs services dont vous avez besoin."
        }
      />
      <div className="services__container --inner-container">
        <div className="services__cards__render">
          {services.map((service) => {
            return (
              <Card
                key={service.id}
                image={service.image}
                title={service.title}
                content={service.description}
                link={service.details}
              />
            );
          })}
        </div>
      </div>
    </ServicesContainer>
  );
};

export default Services;

const ServicesContainer = styled.section`
  padding: 5rem 0;
  .services__container {
    margin: 0 auto;

    .services__cards__render {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }
  }

  @media (max-width: 56.25em) {
    .services__container {
      .services__cards__render {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
`;
