import React from "react";

const sizes = {
    textxs: "text-[8px] font-normal not-italic",
    texts: "text-[9px] font-normal not-italic",  // Changed to use the correct brackets
    textmd: "text-[10px] font-normal not-italic",
    text4xl: "text-[24px] font-normal not-italic md:text-[22px]",
};

const Text = ({ children, className = "", as, size = "textxs", ...restProps }) => {
    const Component = as || "p";
    return (
        <Component className={`text-gray-900 font-sfprotext ${className} ${sizes[size]}`} {...restProps}>
            {children}
        </Component>
    );
};

export { Text };
