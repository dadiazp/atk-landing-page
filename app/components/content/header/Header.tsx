import Charts from "@/app/assets/svg-components/Charts";
import Text, {
  TextColorEnum,
  TextComponentEnum,
  TextSizeEnum,
} from "../../UI/text/Text";
import Button from "../../UI/button/Button";
import Input from "../../UI/input/Input";

const Header = () => {
  return (
    <section className="pt-8 px-0 sm:px-16">
      <div className="px-0">
        <div className="bg-primary-main px-8 pt-24 pb-48 rounded-none sm:rounded-3xl ">
          <div className="flex justify-center text-center">
            <Text
              Component={TextComponentEnum["h1"]}
              colorVariant={TextColorEnum["text-primary-paper"]}
              className="!text-4xl !sm:text-6xl"
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
        <div className="flex justify-center relative bottom-52 ssm:bottom-40 sm:bottom-40 md:bottom-24">
          <Charts />
        </div>
      </div>
    </section>
  );
};

export default Header;
