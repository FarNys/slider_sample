import React from "react";

type UseMediaProps = () => "md" | "sm" | "lg";

const useMedia: UseMediaProps = () => {
  const isMedium = window.matchMedia("(max-width: 736px)");
  const isSmall = window.matchMedia("(max-width: 480px)");

  if (!isMedium.matches && !isSmall.matches) return "lg";
  if (isMedium.matches && !isSmall.matches) return "md";
  return "sm";
};

export default useMedia;
