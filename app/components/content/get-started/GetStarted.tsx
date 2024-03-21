import CallToActionBackgroud from "@/app/assets/svg-images/CallToActionBackground.svg";
import SplittedContainer from "../splitted-container/SplittedContainer";

const GetStarted = () => {
  return (
    <section className="text-center pb-24 px-2 sm:px-16">
      <SplittedContainer
        callToActionTitle="Give us a shot"
        callToActionSubtitle="Join over 4,000+ startups already growing with Untitled."
        callToActionBackground={CallToActionBackgroud.src}
      />
    </section>
  );
};

export default GetStarted;
