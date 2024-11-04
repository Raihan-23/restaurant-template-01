import { Img, Button, Input, Heading } from "./Index";
import React from "react";

export default function BlogPostRowOne({
  deliciousness = "Deliciousness to your inbox",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  subscribe = "Subscribe",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex items-center flex-1`}>
      <div className="flex w-full items-end rounded-[60px] bg-light_blue-50_01 md:flex-col">
        <Img
          src="images/img_kisspng_salad_s.png"
          alt="Salad image"
          className="mt-[66px] h-[374px] w-[28%] rounded-[60px] object-contain md:w-full"
        />
        <div className="relative ml-[-48px] flex-1 md:ml-0 md:self-stretch md:px-5">
          <div className="flex flex-col items-start">
            <Heading
              size="heading6xl"
              as="h1"
              className="ml-3.5 text-[48px] font-semibold tracking-[-1.92px] text-black-900 md:ml-0 md:text-[44px] sm:text-[38px]"
            >
              {deliciousness}
            </Heading>
            <Heading
              as="p"
              className="relative z-[1] mt-3.5 w-[64%] text-center text-[16px] font-normal leading-7 text-black-900_99 md:w-full"
            >
              {description}
            </Heading>
            <div className="relative mt-[-2px] flex items-start gap-[50px] self-stretch md:flex-col">
              <div className="relative mt-[66px] h-[80px] flex-1 content-center md:h-auto md:w-full md:flex-none md:self-stretch">
                <Input
                  shape="round"
                  name="Email Input"
                  placeholder="Your email address..."
                  className="ml-auto w-[86%] rounded-[24px] px-[30px] font-medium tracking-[-0.28px] sm:px-5"
                />
                <Button
                  color="black_900"
                  size="sm"
                  shape="round"
                  className="absolute bottom-0 right-2.5 top-0 my-auto min-w-[160px] rounded-[16px] px-[34px] font-semibold tracking-[-0.28px] sm:px-5"
                >
                  {subscribe}
                </Button>
              </div>
              <div className="flex items-start gap-2.5 self-center rounded-[60px]">
                <Img
                  src="images/img_rucola.png"
                  alt="Rucola image"
                  className="mt-8 h-[112px] w-[30%] rounded-[52px] object-contain"
                />
                <Img
                  src="images/img_photo_plate.png"
                  alt="Plate image"
                  className="h-[226px] w-[68%] self-center rounded-[60px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
