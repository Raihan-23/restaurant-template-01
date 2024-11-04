import { Button, Heading } from "../../Index";
import HomeStackbreakfast from "../../HomeStackbreakfast";
import React, { Suspense } from "react";

const breakfastMenuList = [
    { breakfastOne: "images/ing_image_25.png", breakfastTwo: "Breakfast", breakfastFour: "images/img_image_24.png" },
    { breakfastOne: "images/ing_image_25.png", breakfastTwo: "Breakfast", breakfastFour: "images/ing_image_24.png" },
    { breakfastOne: "images/img_image_21.png", breakfastTwo: "Meat", breakfastFour: "images/img_image_20_100x100.png" },
    {
        breakfastOne: "images/img_image_22.png",
        breakfastTwo: "Dessert",
        breakfastFour: "images/img_image_21_100x100.png",
    },
    {
        breakfastOne: "images/img_image_23.png",
        breakfastTwo: "Lunch",
        breakfastFour: "images/ing_image_22_100x100.png"
    },
    {
        breakfastOne: "images/ing_image_24_100x100.png",
        breakfastTwo: "Chocolate",
        breakfastFour: "images/img_image_23_100x100.png"
    }
];


export default function CategoriesSection() {
    return (
        <div className="nt-40 flex flex-col items-center">
            <div className="container-xs flex flex-col gap-[70px] md:gap-[52px] md:px-5 sm:gap-[35px]">
                <div className="flex items-start justify-between gap-5">
                    <Heading size="heading6xl" as="h2" className="self-center text-[48px] font-semibold tracking-[-1.92px] text-black-900 md:text-[44px] sm:text-[38px]">
                        Categories
                    </Heading>

                    <Button
                        color="light_blue_50"
                        size="sm"
                        shape="round"
                        className="min-w-[200px] rounded-[16px] px-[26px] font-semibold tracking-[-0.32px] sm:px-5"
                    >
                        View All Categories
                    </Button>
                </div>

                <div className="flex gap-10 md:flex-col">
                    <Suspense fallback={<div>Loading feed...</div>}>
                        {breakfastMenuList.map((d, index) => (
                            <HomeStackbreakfast {...d} key={"homeList" + index} />
                        ))}
                    </Suspense>
                </div>
            </div>
        </div>
    );
}
