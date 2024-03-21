import { FC } from "react";
import { LinksInterface } from "../Footer";
import Text, {
  TextColorEnum,
  TextSizeEnum,
} from "@/app/components/UI/text/Text";
import Chip from "@/app/components/UI/chip/Chip";
import Button from "@/app/components/UI/button/Button";

interface LinksListProps {
  data: LinksInterface[];
  title: string;
}
const LinksList: FC<LinksListProps> = ({ data, title }) => {
  return (
    <div className="flex flex-col">
      <Text
        colorVariant={TextColorEnum["text-primary-900"]}
        fontSizeVariant={TextSizeEnum["headline-small"]}
        className="mb-4"
      >
        {title}
      </Text>
      <ul className="flex flex-col">
        {data.map((item) => (
          <li key={item.label} className="flex items-center">
            <Button variant="text" className="pl-0 pr-0 !mt-0">
              <Text
                colorVariant={TextColorEnum["text-primary-700"]}
                fontSizeVariant={TextSizeEnum["headline-medium"]}
                className="text-left"
              >
                {item.label}
              </Text>
            </Button>

            {item.new && (
              <Chip
                label="New"
                classNameString="py-0 px-1.5 bg-primary-paper ml-2 border-primary-button"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinksList;
