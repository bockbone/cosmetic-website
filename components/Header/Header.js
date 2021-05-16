import React from "react";
import IconNav from "./IconNav";
import MiddleNav from "./MiddleNav";
import { UserIcon, ShoppingCartIcon } from "@heroicons/react/outline";

function Header() {
  return (
    <header className="flex justify-between items-center py-8 px-10 md:px-32 2xl:px-80">
      <div>
        <h1 className="font-body uppercase font-bold text-xl">Cosmetic</h1>
      </div>
      <MiddleNav />
      <div className="flex">
        <IconNav Icon={UserIcon} />
        <IconNav Icon={ShoppingCartIcon} />
      </div>
    </header>
  );
}

export default Header;
