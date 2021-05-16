import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="my-20">
      <p className="font-body font-bold text-xs text-center tracking-widest">
        &#169; COSMETIC. {currentYear}
      </p>
    </div>
  );
}

export default Footer;
