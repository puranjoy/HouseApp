import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "Ranfoaof asofijas asfjasf asfafn asfasf asfasfas asfas fas f as fa sf ",
      },
      {
        icon: <FaHiking />,
        title: "High Hiking",
        info:
          "Ranfoaof asofijas asfjasf asfafn asfasf asfasfas asfas fas f as fa sf ",
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info:
          "Ranfoaof asofijas asfjasf asfafn asfasf asfasfas asfas fas f as fa sf ",
      },
      {
        icon: <FaBeer />,
        title: "free beer",
        info:
          "Ranfoaof asofijas asfjasf asfafn asfasf asfasfas asfas fas f as fa sf ",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
