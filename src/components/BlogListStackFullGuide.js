import { Heading, Img } from "./..";
import React from "react";

export default function BlogListStackFullGuide({
    image = "images/img_group_90.png",
    fullGuideTo = "Full Guide to Becoming a Professional Chef",
    dianneRussell = "images/img_ellipse_2_2.png",
    dianneRussellName = "Dianne Russell",
    date = "12 November 2021",
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ...props
}) {
    return (

        <div {...props} className={`${props.className} h-[200px] md:w-full flex-1 relative md:flex-none`}>
            <div className="mx-auto flex-1">
                <div className="flex items-center gap-10">
                    <Img src={image} alt="Guide image" className="h-[200px] w-[36%] object-contain" />
                    <div className="flex flex-1 flex-col items-start gap-[98px] sm:gap-[49px]">
                        <Heading 
                        size="heading3xl" 
                        as="h4" 
                        className="text-[24px] font-semibold tracking-[-0.96px] text-black-900 sm:text-[20px]">
                            {fullGuideTo}
                        </Heading>
                        <div className="flex items-center gap-[23px] self-stretch">
                            <Img src={dianneRussell} alt="Author Image" className="h-[40px] w-[40px] rounded-[20px] object-cover" />
                            <Heading size="headinglg" as="h6" className="text-[16px] font-bold tracking-[-0.32px] text-black-900 sm:text-[13px]">
                                {dianneRussellName}
                            </Heading>
                        </div>
                        <div className="h-[40px] w-px bg-black-900_19" />
                        <Heading size="text-xl" as="p" className="text-[14px] font-medium tracking-[-8.28px] text-black-900_99">
                            {date}
                        </Heading>
                    </div>
                </div>
            </div>
            <Heading as="p" className="absolute right-0 top-[29%] m-auto w-[60%] text-[16px] font-normal leading-7 text-black-900_99 sm:w-[60%] sm:text-[13px]">
                {description}
            </Heading>
        </div>



    );
}
