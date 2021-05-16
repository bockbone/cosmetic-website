import React from "react";
import Link from "next/link";
import midNavData from "./midNavData";

function MiddleNav() {
  return (
    <div className="hidden md:flex">
      {midNavData.map((nav, key) => (
        <Link key={key} href={`/${nav.path}`}>
          <p className="font-body lowercase px-5 cursor-pointer hover:text-gray-500	 transition duration-300 ease-in-out">
            {nav.label}
          </p>
        </Link>
      ))}
    </div>
  );
}

export default MiddleNav;
