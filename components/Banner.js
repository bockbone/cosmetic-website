import React from "react";
import Image from "next/image";
import Button from "./Button";
import Socmed from "./Socmed";

function Banner() {
  return (
    <div className="pt-10 ">
      <div className="flex flex-col-reverse px-10 sm:items-center md:flex md:flex-row md:px-32 md:justify-between md:items-center 2xl:px-80 ">
        <div className="flex flex-col">
          <h1 className="font-displayFirst uppercase text-4xl md:text-7xlfont-medium mb-10 sm:mb-14">
            Liquid<br></br>Lipstick
          </h1>
          <p className="font-body font-light text-xs max-w-xs leading-6 mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button text={"Shop Now"} />
        </div>
        <div className="mb-10 md:mb-0">
          <Image
            layout="intrinsic"
            src="/images/mouth.jpg"
            alt="mouth"
            width={989 / 2}
            height={1236 / 2}
          />
        </div>
        <div className="hidden 2xl:block 2xl:absolute 2xl:right-64">
          <Socmed />
        </div>
      </div>
    </div>
  );
}

export default Banner;
