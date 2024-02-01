import React from "react";

const sizeClasses = {
  txtInterMedium18Gray500: "font-inter font-medium",
  txtInterSemiBold50WhiteA700: "font-inter font-semibold",
  txtInterMedium18Gray900: "font-inter font-medium",
  txtInterRegular12Gray300: "font-inter font-normal",
  txtInterBold28: "font-bold font-inter",
  txtInterSemiBold50: "font-inter font-semibold",
  txtInterBold18Gray500: "font-bold font-inter",
  txtInterBold40: "font-bold font-inter",
  txtInterMedium14WhiteA700: "font-inter font-medium",
  txtInterMedium30: "font-inter font-medium",
  txtInterBold80: "font-bold font-inter",
  txtInterMedium16Black900: "font-inter font-medium",
  txtInterSemiBold30: "font-inter font-semibold",
  txtInterMedium16Gray900: "font-inter font-medium",
  txtInterRegular12Gray50: "font-inter font-normal",
  txtInterMedium18: "font-inter font-medium",
  txtInterBold18: "font-bold font-inter",
  txtInterMedium12: "font-inter font-medium",
  txtInterMedium16: "font-inter font-medium",
  txtInterMedium14: "font-inter font-medium",
  txtInterBold50: "font-bold font-inter",
  txtInterRegular12Gray20001: "font-inter font-normal",
  txtInterSemiBold50Gray900: "font-inter font-semibold",
  txtInterSemiBold20: "font-inter font-semibold",
  txtInterSemiBold30WhiteA700: "font-inter font-semibold",
  txtInterMedium18WhiteA700: "font-inter font-medium",
  txtInterRegular12: "font-inter font-normal",
  txtInterSemiBold30Gray900: "font-inter font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
