import React from "react";
import Image from "next/image";

function ProductList({ productList }) {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:px-10 lg:px-32 2xl:px-80 mb-40 xl:mb-60">
      {productList.map((makeup, key) => (
        <div
          key={key}
          className="mb-10 md:mb-0 md:px-2 flex flex-col items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-110"
        >
          <div>
            <Image
              className="rounded-xl "
              src={`/images/${makeup.image}`}
              alt="mouth"
              width={989 / 4}
              height={1236 / 4}
            />
          </div>
          <h4 className="font-body text-xs my-2">{makeup.title}</h4>
          <p className="font-body text-sm font-bold">{makeup.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
