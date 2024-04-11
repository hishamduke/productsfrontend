import React from "react";
import { TProduct } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }: { product: TProduct }) {
  return (
    <Link
      href={`/product/${product._id}`}
      className={`group mx-2  flex flex-col gap-4 py-6
       rounded 
       w-36
       sm:w-60
       transition
      
       `}
    >
      <div>
        <Image
          src={product.images[0]}
          alt={`Image of the product ${product.title}`}
          width={200}
          height={262}
          className="w-auto 
          h-[172px] 
          sm:h-[272px] 
       group-hover:scale-105
          transition
          mx-auto
          "
        />
      </div>
      <div>
        <p className="font-semibold text-lg">{product.title}</p>
        <p className="text-md"> ₹{product.price}</p>
        {/* <p className="text-md text-muted-foreground"> {product.category}</p> */}
      </div>
    </Link>
  );
}
