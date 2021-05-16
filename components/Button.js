import React from "react";

function Button({ text }) {
  return (
    <div>
      <p className="uppercase cursor-pointer font-body font-medium px-4 py-3 text-xs w-max border border-black rounded-full hover:bg-gray-300">
        {text}
      </p>
    </div>
  );
}

export default Button;
