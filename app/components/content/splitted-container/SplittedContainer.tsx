import CallToAction from "../../UI/call-to-action/CallToAction";
import { FC } from "react";
import { TextWeightEnum } from "../../UI/text/Text";

interface SplittedContainerProps {
  callToActionBackground: any;
  inversed?: boolean;
  callToActionTitle?: string;
  callToActionSubtitle?: string;
  hasButtons?: boolean;
  callToActionHeader?: JSX.Element;
  callToActionfooter?: JSX.Element;
}

const SplittedContainer: FC<SplittedContainerProps> = ({
  inversed = false,
  callToActionTitle,
  callToActionSubtitle,
  hasButtons = true,
  callToActionHeader,
  callToActionfooter,
  callToActionBackground,
}) => {
  return (
    <div
      className={`px-0 ${
        inversed ? "md:pr-5 lg:pr-8" : "md:pl-5 lg:pl-8"
      } flex flex-col md:flex-row rounded-3xl bg-primary-main h-[600px] md:h-[400px]`}
    >
      <CallToAction
        title={callToActionTitle}
        titleWeight={
          inversed
            ? TextWeightEnum["font-medium"]
            : TextWeightEnum["font-semibold"]
        }
        subtitle={callToActionSubtitle}
        enableButtons={hasButtons}
        header={callToActionHeader}
        footer={callToActionfooter}
        className={`${inversed ? "px-6 md:px-16" : "px-5 md:px-2"}`}
      />
      <div
        className={`w-full md:w-2/5 bg-cover ${
          inversed ? "md:rounded-l-3xl" : "md:rounded-r-3xl"
        } bg-no-repeat h-full ${inversed ? "order-first" : "order-last"}`}
        style={{ backgroundImage: `url(${callToActionBackground})` }}
      ></div>
    </div>
  );
};

export default SplittedContainer;
