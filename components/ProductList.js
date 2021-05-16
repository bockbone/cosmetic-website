import React from "react";
import Image from "next/image";

function ProductList({ productList }) {
  return (
    <div className="flex justify-between px-10 md:px-32 xl:px-96 mb-60">
      {productList.map((makeup, key) => (
        <div
          key={key}
          className="flex flex-col items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-110"
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
