import React, { useState } from "react";

import AdjectiveCard from "./AdjectiveCard/AdjectiveCard";
import adjectivesData from "../../../displayData/adjectives";

const Adjectives = () => {
  const [adjectives] = useState(adjectivesData);
  const adjectiveCards = adjectives.map((adjective, index) => (
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
