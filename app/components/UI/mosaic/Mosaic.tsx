"use-client";
import Mosaic1 from "@/app/assets/svg-images/Mosaic1.svg";
import Mosaic2 from "@/app/assets/svg-images/Mosaic2.svg";
import Mosaic3 from "@/app/assets/svg-images/Mosaic3.svg";
import Mosaic4 from "@/app/assets/svg-images/Mosaic4.svg";
import Mosaic5 from "@/app/assets/svg-images/Mosaic5.svg";
import MosaicList from "./mosaic-list/MosaicList";

const Mosaic = () => {
  return (
    <div className="flex flex-col">
      <MosaicList images={[Mosaic1.src, Mosaic2.src]} />
      <MosaicList images={[Mosaic3.src, Mosaic4.src, Mosaic5.src]} start />
    </div>
  );
};

export default Mosaic;
