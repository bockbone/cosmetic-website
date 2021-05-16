import React from "react";
import Image from "next/image";
import Button from "./Button";

function Section({ title, brief, textButton, imagePath, flip }) {
  return (
    <div
      className={
        flip
          ? "px-10 md:px-32 xl:px-96 flex flex-row-reverse justify-between items-center my-20"
          : "px-10 md:px-32 xl:px-96 flex justify-between items-center my-20"
      }
    >
      <div className="flex flex-col">
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
