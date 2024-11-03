import { Heading } from "./../components"; 
import React from "react";

export default function BlogPostColumnVectorThr({
  loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center gap-[46px] flex-1`}>
      <div className="h-px self-stretch bg-black-900_19" />
      <Heading size="text-5xl" as="p" className="w-[90%] text-[36px] font-medium italic leading-[64px] tracking-[-1.44px] text-black-900 sm:w-full sm:text-[30px]">
        {loremIpsum}
      </Heading>
      <div className="h-px self-stretch bg-black-900_19" />
    </div>
  );
}
