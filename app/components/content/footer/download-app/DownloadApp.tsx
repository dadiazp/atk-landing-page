import Text, {
  TextColorEnum,
  TextSizeEnum,
} from "@/app/components/UI/text/Text";

import Apple from "@/app/assets/svg-images/Apple.svg";
import Android from "@/app/assets/svg-images/Android.svg";

const DownloadApp = () => {
  return (
    <div className="flex flex-col items-start sm:items-end mb-12 sm:mb-0">
      <Text
        colorVariant={TextColorEnum["text-primary-900"]}
        fontSizeVariant={TextSizeEnum["headline-small"]}
        className="mb-4"
      >
        Get the app
      </Text>
      <div className="flex sm:flex-col gap-2">
        <img src={Apple.src} />
        <img src={Android.src} />
      </div>
    </div>
  );
};

export default DownloadApp;
