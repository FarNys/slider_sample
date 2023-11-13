import React, { useRef, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { HttpSliderProps } from "../../util/types";
import SingleImageSlider from "./SingleImageSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  DotFilledIcon,
} from "@radix-ui/react-icons";

const ImageSlider = () => {
  const { data, error, isLoading } = useFetch<HttpSliderProps>("home/slider");
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setactiveIndex] = useState<number>(0);

  function sliderChangeHandler(e: SwiperType) {
    setactiveIndex(e.realIndex);
  }

  function nextImageHandler() {
    swiperRef?.current?.slidePrev();
  }
  function prevImageHandler() {
    swiperRef?.current?.slideNext();
  }

  function dotChangeImageHandler(index: number) {
    swiperRef.current?.slideTo(index);
    setactiveIndex(index);
  }

  if (isLoading) return <div className="text-slate-100">Loading</div>;
  if (error) return <div className="text-slate-100">Something went Wrong!</div>;
  if (data?.sliders.length === 0)
    return <div className="text-slate-100">no result!</div>;

  return (
    <div className="relative group lg:min-h-[600px] md:min-h-[400px] sm:min-h-[300px]">
      <div className=" relative w-full mx-auto  swiper_container ">
        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          loop={true}
          spaceBetween={0}
          slidesPerView="auto"
          onSlideChange={sliderChangeHandler}
          className="h-full z-10"
          resizeObserver
        >
          {data?.sliders.map((item, index) => (
            <SwiperSlide
              key={`image-slider-${item.id}`}
              className="w-full h-full"
            >
              <SingleImageSlider item={item} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute bottom-0 left-0 pb-4 px-4 right-0 flex w-full justify-between z-10 ">
          <div className="w-full hidden md:flex">
            <div className=" w-full  opacity-0 flex group-hover:opacity-100">
              <button
                className="w-8 h-8 bg-slate-200 flex justify-center items-center rounded-full"
                onClick={nextImageHandler}
              >
                <ArrowLeftIcon />
              </button>
              <button
                className="w-8 h-8 bg-slate-200 ml-1 flex justify-center items-center rounded-full"
                onClick={prevImageHandler}
              >
                <ArrowRightIcon />
              </button>
            </div>
          </div>
          <div className="px-2 md:w-fit whitespace-nowrap flex justify-center w-full">
            {data?.sliders.map((item, index) => (
              <button
                key={`bullet-${item.id}`}
                onClick={() => dotChangeImageHandler(index)}
              >
                <DotFilledIcon
                  className={`${
                    activeIndex === index
                      ? "bg-slate-200 text-slate-200"
                      : "bg-slate-600 text-slate-600"
                  } rounded-full mr-0.5 w-3 h-3`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
