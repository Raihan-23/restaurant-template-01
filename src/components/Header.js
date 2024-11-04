import React from 'react';
import { Img, Heading } from "./Index";

export default function Header(props) {
  return (
    <header {...props} className={`${props.className} flex flex-col self-stretch gap-10`}>
      <div className="container-xs md:px-5">
        <div className="flex w-[70%] items-center justify-between gap-5 md:w-full md:flex-col">
          <Img
            src="images/img_header_logo.png"
            alt="Header Logo"
            className="h-[30px] w-[110px] object-contain"
          />
          <ul className="flex flex-wrap gap-[60px] self-end md:gap-5 md:self-auto">
            <li>
              <a href="/">
                <Heading as="p" className="text-[16px] font-medium tracking-[-0.32px] text-black-900">
                  Home
                </Heading>
              </a>
            </li>
            <li>
              <a href="#">
                <Heading as="p" className="text-[16px] font-medium tracking-[-0.32px] text-black-900">
                  Recipes
                </Heading>
              </a>
            </li>
            <li>
              <a href="/bloglist">
                <Heading as="p" className="text-[16px] font-medium tracking-[-0.32px] text-black-900">
                  Blog
                </Heading>
              </a>
            </li>
            <li>
              <a href="/contact">
                <Heading as="p" className="text-[16px] font-medium tracking-[-0.32px] text-black-900">
                  Contact
                </Heading>
              </a>
            </li>
            <li>
              <a href="#">
                <Heading as="p" className="text-[16px] font-medium tracking-[-0.32px] text-black-900">
                  About Us
                </Heading>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex w-[10%] items-center justify-between gap-5 md:w-full">
          <Img
            src="images/img_facebook.svg"
            alt="Facebook Icon"
            className="h-[18px]"
          />
          <a href="#">
            <Img src="images/img_trash.svg" alt="Trash Icon" className="h-[16px]" />
          </a>
          <a href="#">
            <Img src="images/img_info.svg" alt="Info Icon" className="h-[22px] w-[22px]" />
          </a>
        </div>
      </div>
      <div className="h-px w-full self-stretch bg-black-900_19" />
    </header>
  );
}

