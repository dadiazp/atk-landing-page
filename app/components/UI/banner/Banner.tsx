import { FC } from "react";
import Text, {
  TextColorEnum,
  TextSizeEnum,
  TextWeightEnum,
} from "../text/Text";
import Chip from "../chip/Chip";

interface BannerProps {
  title: string;
  subtitle: string;
  chipLabel?: string;
}

const Banner: FC<BannerProps> = ({ chipLabel, title, subtitle }) => {
  return (
    <>
      <div>
        {chipLabel && <Chip label={chipLabel} />}
        <Text
          Component="h3"
          colorVariant={TextColorEnum["text-primary-900"]}
          className="my-5 !text-3xl sm:!text-4xl"
        >
          {title}
        </Text>
        <Text
          colorVariant={TextColorEnum["text-tertiary-main"]}
          fontWeightVariant={TextWeightEnum["font-normal"]}
          className="my-4 text-lg sm:text-xl"
        >
          {subtitle}
        </Text>
      </div>
    </>
  );
};

export default Banner;
