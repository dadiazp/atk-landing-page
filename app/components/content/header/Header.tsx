import Charts from "@/app/assets/svg-images/Charts.svg";
import Text, {
  TextColorEnum,
  TextComponentEnum,
  TextSizeEnum,
} from "../../UI/text/Text";
import Button from "../../UI/button/Button";
import Input from "../../UI/input/Input";

const Header = () => {
  return (
    <section className="pb-8 sm:pb-0 pt-8 px-0 sm:px-16">
      <div className="bg-primary-main px-8 pt-24 pb-48 rounded-none sm:rounded-3xl ">
        <div className="flex justify-center text-center">
          <Text
            Component={TextComponentEnum["h1"]}
            colorVariant={TextColorEnum["text-primary-paper"]}
            className="!text-4xl sm:!text-6xl"
          >
            Grow your users.
            <p className="mt-6 text-primary-200">Smarter.</p>
          </Text>
        </div>
        <div className="text-center mt-5">
          <Text
            Component={TextComponentEnum["h2"]}
            colorVariant={TextColorEnum["text-primary-200"]}
            fontWeightVariant="font-normal"
            className="text-lg sm:text-xl"
          >
            Powerful, self-serve product and growth analytics to help you
            convert, engage,
          </Text>
          <Text
            Component={TextComponentEnum["h2"]}
            colorVariant={TextColorEnum["text-primary-200"]}
            fontWeightVariant="font-normal"
            className="text-lg sm:text-xl"
          >
            and retain more users. Trusted by over 4,000 startups.
          </Text>
        </div>
        <div className="mt-10 ">
          <div className="sm:flex sm:justify-center gap-4 h-12">
            <Input helperText="We care about your data in our privacy policy." />
            <Button className="py-2.5 sm:py-1 md:py-2.5">
              <Text
                Component={TextComponentEnum["p"]}
                colorVariant={TextColorEnum["text-primary-paper"]}
                className={`sm:text-sm md:text-base`}
              >
                Get started
              </Text>
            </Button>
          </div>
        </div>
      </div>
      <div className="flex justify-center relative bottom-10 ssm:bottom-16 md:bottom-24  h-auto">
        <div className="w-fit overflow-hidden">
          <img
            className="w-full h-full object-cover object-top"
            src={Charts.src}
          ></img>
        </div>
      </div>
    </section>
  );
};

export default Header;
