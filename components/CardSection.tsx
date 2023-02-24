import React, { FC } from "react";
import { ProjectType } from "../hooks/state/constants";
import Card from "./Card";

type CardSectionProps = {
  cards: ProjectType[];
};

const CardSection: FC<CardSectionProps> = ({ cards }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row flex-wrap gap-2">
        {cards.map((card) => (
          <Card key={card.id} data={card} />
        ))}
      </div>
      <div className="py-5" />
    </div>
  );
};

export default CardSection;
