import RightArrowIcon from "@/app/assets/svg-components/RightArrowIcon";
import Text, {
  TextColorEnum,
  TextSizeEnum,
  TextWeightEnum,
} from "../../text/Text";
import Button from "../../button/Button";
import { FC } from "react";

interface CardItemProp {
  icon: JSX.Element;
  label: string;
  description: string;
  isIntegration: boolean;
}
const CardItem: FC<CardItemProp> = ({
  icon,
  label,
  description,
  isIntegration,
}) => {
  return (
    <div className=" flex flex-col justify-between text-center px-6">
      {icon}
      <Text
        Component="p"
        fontSizeVariant={TextSizeEnum["headline-large"]}
        colorVariant={TextColorEnum["text-primary-900"]}
        className="mb-4 break-words"
      >
        {label} {isIntegration && "integration"}
      </Text>
      <Text
        Component="p"
        fontSizeVariant={TextSizeEnum["headline-medium"]}
        fontWeightVariant={TextWeightEnum["font-normal"]}
        colorVariant={TextColorEnum["text-tertiary-main"]}
        className="mb-4 break-words"
      >
        {description}
      </Text>
      <div>
        <Button variant="text">
          <div className="flex justify-center items-center gap-2">
            <Text colorVariant={TextColorEnum["text-primary-700"]}>
              {isIntegration ? "View integration" : "Learn more"}
            </Text>
            <RightArrowIcon />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default CardItem;
