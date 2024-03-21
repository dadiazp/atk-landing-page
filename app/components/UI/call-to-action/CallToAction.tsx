import { FC } from "react";
import Text, {
  TextColorEnum,
  TextColorType,
  TextSizeEnum,
  TextSizeType,
  TextWeightEnum,
  TextWeightType,
} from "../text/Text";
import Button from "../button/Button";

interface CallToActionProps {
  title?: string;
  subtitle?: string;
  className?: string;
  titleColor?: TextColorType;
  titleWeight?: TextWeightType;
  titleSize?: TextSizeType;
  subtitleColor?: TextColorType;
  enableButtons?: boolean;
  header?: JSX.Element;
  footer?: JSX.Element;
}

const CallToAction: FC<CallToActionProps> = ({
  title,
  subtitle,
  className,
  titleColor = TextColorEnum["text-primary-paper"],
  titleWeight = TextWeightEnum["font-semibold"],
  titleSize = TextSizeEnum["display-small"],
  subtitleColor = TextColorEnum["text-primary-200"],
  enableButtons = true,
  header,
  footer,
}) => {
  return (
    <div
      className={`py-10 sm:py-16 w-full md:w-3/5 ${
        header ? "flex flex-col justify-around" : "my-auto"
      } text-left ${className ? className : ""}`}
    >
      {header && <div className="mb-1">{header}</div>}
      {title && (
        <Text
          colorVariant={titleColor}
          fontWeightVariant={titleWeight}
          className="!text-3xl !sm:text-5xl"
        >
          {title}
        </Text>
      )}
      {subtitle && (
        <Text colorVariant={subtitleColor} className="mt-4 mb-8">
          {subtitle}
        </Text>
      )}
      {enableButtons && (
        <div className="flex flex-col md:flex-row gap-0 md:gap-3">
          <Button
            className="bg-primary-paper text-tertiary-inverse mt-1 md:mt-10"
            variant={
              titleColor === TextColorEnum["text-primary-paper"]
                ? "contained"
                : "outlined"
            }
          >
            <Text>Learn more</Text>
          </Button>
          <Button className="bg-primary-button mt-3 md:mt-10">
            <Text colorVariant={TextColorEnum["text-primary-paper"]}>
              Get started
            </Text>
          </Button>
        </div>
      )}
      {footer}
    </div>
  );
};

export default CallToAction;
