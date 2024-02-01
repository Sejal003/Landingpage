import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-none",
  circle: "rounded-[50%]",
  round: "rounded-[10px]",
};
const variants = {
  fill: {
    deep_orange_200: "bg-deep_orange-200",
    teal_300_01: "bg-teal-300_01 text-white-A700",
    gray_500: "bg-gray-500",
    teal_200_01: "bg-teal-200_01 text-white-A700",
    teal_300: "bg-teal-300 text-white-A700",
    teal_200: "bg-teal-200",
    white_A700: "bg-white-A700 shadow-bs text-teal-300",
  },
  outline: { white_A700: "border-2 border-solid border-white-A700" },
};
const sizes = { xs: "p-1.5", sm: "p-2.5", md: "p-[15px]", lg: "p-5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "lg",
  variant = "fill",
  color = "white_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "deep_orange_200",
    "teal_300_01",
    "gray_500",
    "teal_200_01",
    "teal_300",
    "teal_200",
    "white_A700",
  ]),
};

export { Button };
