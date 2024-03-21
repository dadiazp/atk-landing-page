import Stars from "@/app/assets/svg-components/Stars";
import SplittedContainer from "../splitted-container/SplittedContainer";
import CallToActionBackground2 from "@/app/assets/svg-images/CallToActionBackground2.svg";
import Text, {
  TextColorEnum,
  TextSizeEnum,
  TextWeightEnum,
} from "../../UI/text/Text";

const Testimonials = () => {
  return (
    <section className="text-center py-16 sm:py-24 px-2 sm:px-16">
      <SplittedContainer
        callToActionBackground={CallToActionBackground2.src}
        callToActionTitle="Love the simplicity of the service and the prompt customer support. We can’t imagine working without it."
        callToActionHeader={<Stars />}
        callToActionfooter={
          <div>
            <Text
              colorVariant={TextColorEnum["text-primary-paper"]}
              className="text-lg"
            >
              - Renee wells
            </Text>
            <Text
              colorVariant={TextColorEnum["text-primary-200"]}
              fontSizeVariant={TextSizeEnum["headline-small"]}
              fontWeightVariant={TextWeightEnum["font-normal"]}
            >
              Product Designer, Quotient
            </Text>
          </div>
        }
        hasButtons={false}
        inversed
      />
    </section>
  );
};

export default Testimonials;
