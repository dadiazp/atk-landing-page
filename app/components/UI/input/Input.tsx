import QuestionIcon from "@/app/assets/svg-components/QuestionIcon";
import Text, {
  TextColorEnum,
  TextComponentEnum,
  TextWeightEnum,
} from "../text/Text";
import { FC } from "react";

interface InputProps {
  helperText?: string;
}

const Input: FC<InputProps> = ({ helperText }) => {
  return (
    <div className="relative mb-4 h-full">
      <input className="rounded-lg py-2 px-3 h-full w-full md:w-[334px]" />
      <div className="absolute top-4 right-5">
        <QuestionIcon />
      </div>
      {helperText && (
        <div className="mt-2">
          <Text
            Component={TextComponentEnum["p"]}
            colorVariant={TextColorEnum["text-primary-200"]}
            fontWeightVariant={TextWeightEnum["font-normal"]}
          >
            {helperText}
          </Text>
        </div>
      )}
    </div>
  );
};

export default Input;
