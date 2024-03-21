"use client";
import { Accordion } from "@szhsin/react-accordion";
import AccordionItem from "./accordion-item/AccordionItem";
import Text, { TextWeightEnum } from "../text/Text";
import Divider from "../divider/Divider";

export default function AccordionComponent() {
  return (
    <div className="mx-2 my-4 px-4 md:px-20 lg:px-60">
      <Accordion transition transitionTimeout={200}>
        <AccordionItem
          headerString="Is there a free trial available?"
          initialEntered
        >
          <Text
            fontWeightVariant={TextWeightEnum["font-normal"]}
            className="text-left"
          >
            Yes, you can try us for free for 30 days. If you want, we’ll provide
            you with a free, personalized 30-minute onboarding call to get you
            up and running as soon as possible.
          </Text>
        </AccordionItem>
        <Divider />

        <AccordionItem headerString="Can I change my plan later?">
          <Text
            fontWeightVariant={TextWeightEnum["font-normal"]}
            className="text-left"
          >
            {" "}
            Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel
            erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae.
          </Text>
        </AccordionItem>
        <Divider />

        <AccordionItem headerString="What is your cancellation policy?">
          <Text
            fontWeightVariant={TextWeightEnum["font-normal"]}
            className="text-left"
          >
            Suspendisse massa risus, pretium id interdum in, dictum sit amet
            ante. Fusce vulputate purus sed tempus feugiat.
          </Text>
        </AccordionItem>
        <Divider />

        <AccordionItem headerString="Can other info be added to an invoice?">
          <Text
            fontWeightVariant={TextWeightEnum["font-normal"]}
            className="text-left"
          >
            Suspendisse massa risus, pretium id interdum in, dictum sit amet
            ante. Fusce vulputate purus sed tempus feugiat.
          </Text>
        </AccordionItem>
        <Divider />

        <AccordionItem headerString="How does billing work?">
          <Text
            fontWeightVariant={TextWeightEnum["font-normal"]}
            className="text-left"
          >
            Suspendisse massa risus, pretium id interdum in, dictum sit amet
            ante. Fusce vulputate purus sed tempus feugiat.
          </Text>
        </AccordionItem>
        <Divider />

        <AccordionItem headerString="How do I change my account email?">
          <Text
            fontWeightVariant={TextWeightEnum["font-normal"]}
            className="text-left"
          >
            Suspendisse massa risus, pretium id interdum in, dictum sit amet
            ante. Fusce vulputate purus sed tempus feugiat.
          </Text>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
