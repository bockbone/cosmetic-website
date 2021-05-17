import React from "react";
import Image from "next/image";
import Button from "./Button";

function Section({ title, brief, textButton, imagePath, flip }) {
  return (
    <div
      className={
        flip
          ? "px-10 py-20 md:py-0 md:px-32 2xl:px-80 md:flex md:flex-row-reverse md:justify-between md:items-center md:my-20"
          : "px-10 py-20 md:py-0 md:px-32 2xl:px-80 md:flex md:justify-between md:items-center md:my-20"
      }
    >
      <div className="flex flex-col pb-10 md:pb-0">
        <h2 className="font-displaySecondary text-6xl mb-14">{title}</h2>
        <p className="font-body text-base max-w-xs mb-12">{brief}</p>
        <Button text={textButton} />
      </div>
      <div>
        <Image
          src={`/images/${imagePath}`}
          alt="mouth"
          width={989 / 2}
          height={1236 / 2}
        />
      </div>
    </div>
  );
}

export default Section;
