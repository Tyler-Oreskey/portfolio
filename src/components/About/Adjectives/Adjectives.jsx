import React from "react";

import AdjectiveCard from "./AdjectiveCard/AdjectiveCard";

import speed from "../../../assets/images/icons/speed.png";
import responsive from "../../../assets/images/icons/responsive.png";
import secure from "../../../assets/images/icons/secure.png";
import heart from "../../../assets/images/icons/heart.png";

const Adjectives = () => {
  const adjectivesArray = [
    {
      image: speed,
      adjective: "Fast",
      description:
        "Superior load times and lag free interaction, my greatest priority.",
    },
    {
      image: responsive,
      adjective: "Responsive",
      description:
        "My layouts will flourish on any device big or small, I don't judge here.",
    },
    {
      image: secure,
      adjective: "Secure",
      description:
        "Unfortunately people with malicious intent exist, I don't let them thrive.",
    },
    {
      image: heart,
      adjective: "Custom",
      description:
        "Laboured with love, customized to fulfill your needs and wants.",
    },
  ];

  const adjectiveCards = adjectivesArray.map((adjective, index) => (
    <div className="col-md-3" key={index}>
      <AdjectiveCard
        image={adjective.image}
        adjective={adjective.adjective}
        description={adjective.description}
      />
    </div>
  ));
  return adjectiveCards;
};

export default Adjectives;
