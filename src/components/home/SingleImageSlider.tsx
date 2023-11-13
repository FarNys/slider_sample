import React, { useMemo } from "react";
import { SingleSliderProps } from "../../util/types";
import useMedia from "../../hooks/useMedia";

interface SingleImageSliderProps {
  item: SingleSliderProps;
  index: number;
}

const SingleImageSlider: React.FC<SingleImageSliderProps> = ({
  item,
  index,
}) => {
  // const screenSize = useMedia();
  // const correctImage = useMemo(() => {
  //   if (screenSize === "sm") return item.smallImageUrl || item.imageUrl;
  //   if (screenSize === "md") return item.mediumImageUrl || item.imageUrl;
  //   return item.imageUrl;
  // }, [screenSize]);

  return (
    <div className="w-full flex h-full">
      <img
        className="flex-1 object-cover bg-center"
        src={item.imageUrl}
        alt={item.entityTitle || `image-${index}`}
        loading="lazy"
      />
    </div>
  );
};

export default SingleImageSlider;
