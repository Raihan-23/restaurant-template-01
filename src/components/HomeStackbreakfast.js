import React from "react"; 
import { Img, Heading } from "../components/Index"; 

export default function HomeStackbreakfast({
    breakfastOne = "images/ing_image_25.png",
    breakfastTwo = "Breakfast",
    breakfastFour = "images/ing_image_24.png",
    ...props 
}) {
    return (
        <div {...props} className={`${props.className} h-[202px] w-[16%] md:w-full relative`}>
            <div className="mx-auto flex-1">
                <Img
                    src={breakfastOne}
                    alt="Breakfast Image"
                    className="relative z-[12] mx-10 h-[100px] w-[100px] object-cover"
                />

                <div className="relative mt-[-50px] flex justify-center rounded-[30px] bg-gradient p-[3px] sm:p-5"> 
                    <Heading
                        size="headingxl" 
                        as="h2" 
                        className="mt-[70px] text-[18px] font-semibold tracking-[-0.36px] text-black-900"
                    >
                        {breakfastTwo} 
                    </Heading>
                </div>
            </div>

            <Img
                src={breakfastFour} 
                alt="Secondary Image"
                className="absolute right-5 top-5 z-[13] m-auto h-[100px] w-[100px] object-cover"
            />
        </div>
    );
}
