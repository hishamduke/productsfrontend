import BackButton from "@/components/BackButton";
import ImageSlider from "@/components/ImageSlider";
import { Button } from "@/components/ui/button";
import { ofetcher } from "@/lib/ofetcher";
import { TProduct } from "@/types/product";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Page({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = params;
  const product = (await ofetcher(`/products/${productId}`)) as TProduct;

  return (
    <div>
      <BackButton />

      <div className="grid lg:grid-cols-2 my-6 grid-cols-1 gap-10">
        <div className="mx-14 flex-1 h-full">
          <ImageSlider
            alt={`Product image of ${product.title}`}
            images={product.images}
          />
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            {product.title}
          </h3>
          <div>
            <p>₹{product.price}</p>
            <p className="text-muted-foreground">{product.category}</p>
          </div>

          <div>
            <blockquote className="italic">{product.description}</blockquote>
          </div>

          <div>
            <Button>Add to cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
