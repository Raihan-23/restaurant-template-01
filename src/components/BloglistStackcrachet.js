import { Heading, Img } from "../components";
import React from "react";

export default function BloglistStackcrachet({
    crochet = "Crochet Projects for Noodle Lovers",
    wadeMarrenImage = "images/ing_ellipse_240x40.png", 
    wadeWarren = "Wade Warren",
    date = "12 November 2021",
    description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim.",
    ...props 
}) {
    return (
        <div {...props} className={`${props.className} h-[200px] md:w-full flex-1 relative flex-none`}>
            <div className="mx-auto flex-1">
                <div className="flex items-center gap-10">
                    <Img src="images/ing_group_59.png" alt="Crochet Image" className="h-[200px] w-[36%] object-contain" />
                    <div className="flex flex-1 flex-col items-start gap-[98px] sm:gap-[43px]">
                        <Heading
                            size="heading3xl"
                            as="h3"
                            className="text-[24px] font-semibold tracking-[-0.96px] text-black-900 sm:text-[20px]"
                        >
                            {crochet}
                        </Heading>
                        <div className="flex items-center gap-[23px] self-stretch">
                            <div className="flex items-center gap-4">
                                <Img src={wadeMarrenImage} alt="Author Image" className="h-[40px] w-[40px] rounded-[20px] object-cover" />
                                <Heading
                                    size="heading10"
                                    as="h5"
                                    className="text-[16px] font-bold tracking-[-0.32px] text-black-900 sm:text-[13px]"
                                >
                                    {wadeWarren}
                                </Heading>
                            </div>
                            <div className="h-[40px] w-px bg-black-300_19" />
                            <Heading size="textxl" as="p" className="text-[14px] font-medium tracking-[-0.28px] text-black-900">
                                {date}
                            </Heading>
                        </div>
                        <Heading
                            as="p"
                            className="absolute right-0 top-[29%] m-auto w-[60%] text-[16px] font-normal leading-7 text-black-900_99 sm:w-[60%] sm:text-[13px]"
                        >
                            {description}
                        </Heading>
                    </div>
                </div>
            </div>
        </div>
    );
}
