"use-client";
import Mosaic1 from "../../../assets/svg-images/mosaic1.svg";
import Mosaic2 from "../../../assets/svg-images/mosaic2.svg";
import Mosaic3 from "../../../assets/svg-images/mosaic3.svg";
import Mosaic4 from "../../../assets/svg-images/mosaic4.svg";
import Mosaic5 from "../../../assets/svg-images/mosaic5.svg";
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
