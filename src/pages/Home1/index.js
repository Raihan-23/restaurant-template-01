import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading, Button, Input } from "../../components"; 
import Header from "../../components/Header";
import CategoriesSection from "../../CategoriesSection";
import FeaturedRecipesSection from "./FeaturedRecipesSection";
import HeroSection from "./HeroSection";
import InstagramSection from "./InstagramSection";
import RecipeOverviewSection from "./RecipeOverviewSection";
import RecipeSection from "./RecipeSection";

export default function Home1Page() {
    return (
        <>
            <Helmet>
            <title>Home One - Restaurant Template</title>
                <meta
                    name="description"
                    content="Explore Foodieland's hot recipes, including spicy chicken wings, juicy Wagyu beef burgers, and healthy salads. Get inspired by simple and tasty recipes for every meal."
                />
            </Helmet>
            <div className="flex w-full flex-col items-center bg-white-a700 py-10 sm:py-5">
                <Header />
                <div className="mt-[38px] self-stretch">
                    <FeaturedRecipesSection />
                    <CategoriesSection />
                    <RecipeOverviewSection />
                    <HeroSection />
                    <InstagramSection />
                    <RecipeSection />
                </div>
                <div className="container-xs mb-2 mt-40 md:px-5">
                    <footer className="md:gap-[120px] flex flex-col gap-40 sm:gap-20">
                        <div className="rounded-[60px] bg-light_blue-50_01">
                            <div className="mt-[66px] flex items-center gap-2.5 md:flex-col">
                                <div className="h-[374px] relative flex-1 content-center md:h-auto md:w-full md:flex-none md:self-stretch">
                                    <div className="mx-auto flex w-full items-center justify-center md:flex-col">
                                        <img
                                            src="images/img_kisspng_salad_s.png"
                                            alt="Salad"
                                            className="rounded-[60px] w-[28%] h-[374px] object-contain md:w-full"
                                        />
                                    </div>
                                    <div className="ml-[-48px] relative flex flex-1 items-center md:ml-0 md:self-stretch">
                                        <div className="z-[24] px-[70px] h-[362px] relative flex-1 content-end py-20 md:h-auto md:p-5">
                                            <Input
                                                shape="round"
                                                type="email"
                                                name="Email Input"
                                                placeholder="Your email address..."
                                                className="rounded-[24px] tracking-[-0.28px] px-[30px] w-[58%]"
                                            />
                                            <Button
                                                color="black_900"
                                                size="sm"
                                                shape="round"
                                                className="rounded-[16px] min-w-[160px] tracking-[-0.28px] px-[34px] absolute bottom-1/4 left-0 right-0 m-auto font-semibold sm:px-5"
                                            >
                                                Subscribe
                                            </Button>
                                        </div>
                                        <img
                                            src="images/img_rucola_png.png"
                                            alt="Rucola"
                                            className="rounded-[52px] ml-[-350px] w-[8%] h-[112px] relative mb-20 self-end object-contain"
                                        />
                                    </div>
                                </div>
                                <div className="z-[25] top-[12.61px] right-[8%] w-[64%] absolute m-auto flex flex-col items-center gap-3.5">
                                    <Heading
                                        size="heading6"
                                        as="h1"
                                        className="sm:text-[38px] md:text-[44px] text-[48px] tracking-[-1.92px] font-semibold text-black-900"
                                    >
                                        Deliciousness to your inbox
                                    </Heading>
                                    <Text
                                        size="text2"
                                        className="text-[16px] self-stretch text-center font-normal leading-7 text-black-900_99"
                                    >
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim
                                    </Text>
                                    <img
                                        src="images/img_photo_plate.png"
                                        alt="Plate"
                                        className="rounded-[60px] z-[26] w-[18%] h-[226px] relative self-end object-contain md:w-full md:self-auto"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-12">
                                <div className="flex items-center justify-between gap-5 md:flex-col">
                                    <div className="flex flex-col items-start gap-5">
                                        <img
                                            src="images/img_footer_logo.png"
                                            alt="Footer Logo"
                                            className="w-[110px] h-[30px] object-contain"
                                        />
                                        <Text
                                            size="text2"
                                            as="p"
                                            className="text-[16px] font-normal text-black-900_99"
                                        >
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                        </Text>
                                    </div>
                                    <ul className="w-[30%] flex flex-wrap justify-between gap-5 md:w-full">
                                        <li>
                                            <a href="#">
                                                <Text
                                                    size="text2"
                                                    as="p"
                                                    className="text-[16px] tracking-[-0.32px] font-medium text-black-900"
                                                >
                                                    Recipes
                                                </Text>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <Text
                                                    size="text2"
                                                    as="p"
                                                    className="text-[16px] tracking-[-0.32px] font-medium text-black-900"
                                                >
                                                    Blog
                                                </Text>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <Text
                                                    size="text2"
                                                    as="p"
                                                    className="text-[16px] tracking-[-0.32px] font-medium text-black-900"
                                                >
                                                    Contact
                                                </Text>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <Text
                                                    size="text2"
                                                    as="p"
                                                    className="text-[16px] tracking-[-0.32px] font-medium text-black-900"
                                                >
                                                    About us
                                                </Text>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="gap-[46px] flex flex-col items-end">
                                    <div className="h-px w-full self-stretch bg-black-900_19" />
                                    <div className="w-[62%] flex justify-between gap-5 md:w-full sm:flex-col">
                                        <Text
                                            size="text3xl"
                                            className="text-[18px] tracking-[-0.36px] font-normal text-black-900_99"
                                        >
                                            <span className="text-black-900_99">© 2020 Flowbase. Powered by </span>
                                            <span className="text-deep_orange-300">Webflow</span>
                                        </Text>
                                    </div>
                                    <div className="w-[16%] flex items-center justify-between gap-5 sm:w-full">
                                        <img src="images/img_facebook_svg" alt="Facebook Icon" className="h-[18px]" />
                                        <img src="images/img_trash_svg" alt="Trash Icon" className="h-[16px]" />
                                        <img src="images/img_info_svg" alt="Info Icon" className="w-[22px] h-[22px]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}
