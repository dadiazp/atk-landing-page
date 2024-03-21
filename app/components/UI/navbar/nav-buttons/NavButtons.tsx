import Button, { Variant } from "../../button/Button";
import Text, { TextColorEnum } from "../../text/Text";

const NavButtons = () => {
  return (
    <div className="flex  gap-3">
      <Button type="button" variant={Variant.OUTLINED}>
        <Text>{"Log in"}</Text>
      </Button>
      <Button type="button">
        <Text colorVariant={TextColorEnum["text-primary-paper"]}>
          {"Sign up"}
        </Text>
      </Button>
    </div>
  );
};

export default NavButtons;
