import { FC } from "react";
import MosaicItem from "../mosaic-item/MosaicItem";

interface MosaicListProp {
  images: any[];
  start?: boolean;
}
const MosaicList: FC<MosaicListProp> = ({ images, start = false }) => {
  return (
    <div
      className={`flex flex-col md:flex-row justify-center items-center md:${
        start ? "items-start" : "items-end"
      } gap-3`}
    >
      {images.map((image) => (
        <MosaicItem key={image} image={image} />
      ))}
    </div>
  );
};

export default MosaicList;
