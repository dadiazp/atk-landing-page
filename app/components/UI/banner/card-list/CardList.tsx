import { FC } from "react";
import CardItem from "../card-item/CardItem";

export type Data = {
  icon: JSX.Element;
  label: string;
  description: string;
};

interface CardListProp {
  data: Data[];
  isIntegration?: boolean;
}

const CardList: FC<CardListProp> = ({ data, isIntegration = false }) => {
  return (
    <div
      className={`mt-14 grid grid-cols-1 md:grid-cols-3 ${
        isIntegration ? "gap-12" : "gap-5"
      }`}
    >
      {data.map((feature) => (
        <CardItem
          key={feature.label}
          icon={feature.icon}
          label={feature.label}
          description={feature.description}
          isIntegration={isIntegration}
        />
      ))}
    </div>
  );
};

export default CardList;
