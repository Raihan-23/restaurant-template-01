import React from "react";
import { Img, Heading } from "./Index"; // Ensure this path is correct

export default function Footer({...props}) {
    return (
        <footer {...props} className={`${props.className} flex flex-col gap-12`}>
            <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
                <div className="flex flex-col items-start gap-5">
                    <Img src="images/ing_footer_logo.png" alt="Footer Logo" className="h-[30px] w-[110px] object-contain" />
                    <Heading as="p" className="text-[16px] font-normal text-black-900_99">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
                    </Heading>
                </div>
                <ul className="flex w-[30%] flex-wrap justify-between gap-5 md:w-full">
                    <li>
                        <a href="/recipes" target="_blank" rel="noreferrer">
                            <Heading as="p" className="text-[16px] font-medium tracking-[-0.32px] text-black-900">
                                Recipes
                            </Heading>
                        </a>
                    </li>
                    <li>
                        <a href="/blog" target="_blank" rel="noreferrer">
                            <Heading as="p" className="text-[16px] font-medium tracking-[-0.32px] text-black-900">
                                Blog
                            </Heading>
                        </a>
                    </li>
                    <li>
                        <a href="/contact" target="_blank" rel="noreferrer">
                            <Heading as="p" className="text-[16px] font-medium tracking-[-0.32px] text-black-900">
                                Contact
                            </Heading>
                        </a>
                    </li>
                    <li>
                        <a href="s">
                            <Heading as="p" className="text-[16px] font-medium tracking-[-0.32px] text-black-900">
                                About Us
                            </Heading>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col items-end gap-[46px] self-stretch">
                <div className="h-px w-full self-stretch bg-black-900_19" />
                <div className="flex w-[62%] justify-between gap-5 md:w-full sm:flex-col">
                    <Heading
                    size="text3xl"
                        as="p"
                        className="font-eudoxussans text-[18px] font-normal tracking-[-0.36px] text-black-900_99"
                    >
                        <span className="text-black-900_99">© 2020 Flowbase. Powered by&nbsp;</span>
                        <span className="text-deep_orange-300">Webflow</span>
                    </Heading>
                    <div className="flex w-[16%] items-center justify-between gap-5 sm:w-full">
                        <Img src="images/ing_facebook.svg" alt="Facebook Icon" className="h-[18px]" />
                        <Img src="images/ing_trash.svg" alt="Trash Icon" className="h-[16px]" />
                        <Img src="images/ing_info.svg" alt="Info Icon" className="h-[22px] w-[22px]" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
