import { FC } from "react";
import Text, {
  TextColorEnum,
  TextSizeEnum,
  TextWeightEnum,
} from "../text/Text";

interface ChipProps {
  label?: string;
  classNameString?: string;
}

const Chip: FC<ChipProps> = ({ label, classNameString }) => {
  return (
    <span
      className={`py-1 px-3 rounded-full border border-primary-200 bg-primary-50 ${classNameString}`}
    >
      <Text
        colorVariant={TextColorEnum["text-primary-700"]}
        fontWeightVariant={TextWeightEnum["font-medium"]}
        fontSizeVariant={TextSizeEnum["headline-small"]}
        Component="span"
      >
        {label}
      </Text>
    </span>
  );
};

export default Chip;
