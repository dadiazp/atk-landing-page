import { FC } from "react";

interface MosaicItemProps {
  image: any;
}

const MosaicItem: FC<MosaicItemProps> = ({ image }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:items-end gap-3 mb-3 w-full md:w-auto">
      <div className="w-full h-48 md:h-auto overflow-hidden">
        <img
          className="w-full h-full object-cover object-top"
          src={image}
        ></img>
      </div>
    </div>
  );
};

export default MosaicItem;
