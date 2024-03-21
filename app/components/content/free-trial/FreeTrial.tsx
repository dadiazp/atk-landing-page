import { TextColorEnum, TextSizeEnum } from "../../UI/text/Text";
import CallToAction from "../../UI/call-to-action/CallToAction";
import Mosaic from "../../UI/mosaic/Mosaic";

const FreeTrial = () => {
  return (
    <section className="text-center  sm:py-24 px-2 sm:px-16 bg-secondary-main">
      <div className="px-0 flex flex-col md:flex-row rounded-3xl  h-auto md:h-[488px]">
        <CallToAction
          title="No long-term contracts. No catches."
          subtitle="Start your 30-day free trial today."
          className="px-0 md:px-0"
          titleColor={TextColorEnum["text-primary-900"]}
          subtitleColor={TextColorEnum["text-tertiary-main"]}
        />
        <Mosaic />
      </div>
    </section>
  );
};

export default FreeTrial;
