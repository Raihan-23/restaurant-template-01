import { Heading, Img } from "../components";
import React from "react";

export default function BlogListStackbyAndreas({
    byandreas = "By Andreas Paula",
    chicken = "Chicken Meatballs with Cream Cheese",
    ...props // Spread operator to accept other props
}) {
    return (
        <div {...props} className={`${props.className} h-[120px] w-full flex-1 relative flex-none`}>
            <div className="mx-auto flex flex-1 items-center gap-6">
                <Img src="images/ing_group_90.png" alt="Author Image" className="h-[120px] w-[48%] object-contain" />
                <Heading
                    size="textxl"
                    as="p"
                    className="mb-3.5 self-end text-[14px] font-medium tracking-[-0.28px] text-black-900_99"
                >
                    {byandreas}
                </Heading>
            </div>
            <Heading
                size="heading2xl"
                as="h5"
                className="absolute right-0 top-4 m-auto w-[48%] text-[20px] font-semibold leading-7 tracking-[-0.80px] text-black-900"
            >
                {chicken}
            </Heading>
        </div>
    );
}
