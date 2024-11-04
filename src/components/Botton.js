import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[16px]",
  circle: "rounded-[50%]",
};

const variants = {
  fill: {
    light_blue_50: "bg-light_blue-50 text-black-900",
    white_A700_cc: "bg-white-a700_cc",
    white_A700: "bg-white-a700",
    black_900: "bg-black-900 text-white-a700",
  },
};

const sizes = {
  xl: "h-[120px] px-11",
  md: "h-[64px] px-[26px]",
  lg: "h-[64px] px-[26px] text-[18px]",
  sm: "h-[60px] px-[34px] text-[14px]",
  xs: "h-[48px] px-3",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "white_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap 
        ${shape && shapes[shape]} 
        ${size && sizes[size]} 
        ${variant && variants[variant] ?.[color]}`}
      {...restProps}
    >
      {!! leftIcon && leftIcon}
      {children}
      {!! rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round", "circle"]),
  size: PropTypes.oneOf(["xl", "md", "lg", "sm", "xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["light_blue_50", "white_A700_cc", "white_A700", "black_900"]),
};

export {Button};
