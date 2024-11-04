import React from "react";
import PropTypes from "prop-types";

const shapes = {
    round: "rounded-[24px]",
};

const variants = {
    fill: {
        white_A700: "bg-white-a700 text-black-900_66",
    },
};

const sizes = {
    xs: "h-[60px] px-5 text-[14px]",
    sm: "h-[80px] px-[30px] text-[14px]",
};

const Input = React.forwardRef(
    (
        {
            className = "",
            name = "",
            placeholder = "",
            type = "text",
            label = "",
            prefix,
            suffix,
            onChange,
            shape,
            variant = "fill",
            size = "sm",
            color = "white_A700",
            ...restProps
        },
        ref
    ) => {
        return (
            <label
                className={`${className
                    } flex items-center cursor-text tracking-[-0.28px] text-[14px] bg-white-a700 ${shape && shapes[shape]
                    } ${variant && (variants[variant]?.[color] || variants[variant])
                    } ${size && sizes[size]
                    }`}
            >
                {!!label && label}
                {!!prefix && prefix}
                <input ref={ref} type={type} name={name} placeholder={placeholder} onChange={onChange} {...restProps} />
                {!!suffix && suffix}
            </label>
        );
    }
);

Input.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    prefix: PropTypes.node,
    suffix: PropTypes.node,
    onChange: PropTypes.func,
    shape: PropTypes.oneOf(["round"]),
    variant: PropTypes.oneOf(["fill"]),
    size: PropTypes.oneOf(["xs", "sm"]),
    color: PropTypes.oneOf(["white_A700"]),
};

export { Input };
