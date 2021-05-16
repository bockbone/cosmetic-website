import React from "react";

function IconNav({ Icon }) {
  return (
    <div className="group cursor-pointer">
      <Icon className="h-6 mx-2 group-hover:animate-bounce group-hover:text-gray-500" />
    </div>
  );
}

export default IconNav;
