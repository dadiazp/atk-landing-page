import Minus from "@/app/assets/svg-components/Minus";
import Plus from "@/app/assets/svg-components/Plus";
import {
  AccordionItemProps,
  AccordionItem as Item,
} from "@szhsin/react-accordion";
import { FC } from "react";
import Text, { TextColorEnum } from "../../text/Text";

interface AccordionItemPropsExtended extends AccordionItemProps {
  headerString: string;
}

const AccordionItem: FC<AccordionItemPropsExtended> = ({
  headerString,
  ...rest
}) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        <Text colorVariant={TextColorEnum["text-primary-900"]}>
          {headerString}
        </Text>
        <div className="ml-auto transition-transform duration-200 ease-out">
          {isEnter ? <Minus /> : <Plus />}
        </div>
      </>
    )}
    buttonProps={{
      className: ({ isEnter }) =>
        `flex w-full p-4 text-left hover:bg-slate-100 ${
          isEnter && "bg-slate-200"
        }`,
    }}
    contentProps={{
      className: "transition-height duration-200 ease-out",
    }}
    panelProps={{ className: "p-4" }}
  />
);

export default AccordionItem;
