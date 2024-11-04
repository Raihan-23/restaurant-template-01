import React from "react";

const sizes = {
  textlg: "text-[12px] font-medium",
  textxl: "text-[14px] font-medium",
  text2xl: "text-[16px] font-medium not-italic",
  text3xl: "text-[18px] font-medium",
  text5xl: "text-[36px] font-medium italic md:text-[34px] sm:text-[32px]",
  headingxs: "text-[10px] font-semibold",
  headings: "text-[12px] font-bold",
  headingmd: "text-[14px] font-semibold",
  headinglg: "text-[16px] font-bold",
  headingxl: "text-[18px] font-semibold",
  heading2xl: "text-[20px] font-semibold",
  heading3xl: "text-[24px] font-semibold md:text-[22px]",
  heading4xl: "text-[32px] font-semibold md:text-[30px] sm:text-[28px]",
  heading5xl: "text-[36px] font-semibold md:text-[34px] sm:text-[32px]",
  heading6xl: "text-[48px] font-semibold md:text-[44px] sm:text-[38px]",
  heading7xl: "text-[64px] font-semibold md:text-[48px]",
};

const Heading = ({ children, className = "", size = "text2xl", as, ...restProps }) => {
  const Component = as || "h6";
  return (
    <Component className={`text-black-900 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
