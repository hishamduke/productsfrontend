import ImageSlider from "@/components/ImageSlider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ofetcher } from "@/lib/ofetcher";
import { TProduct } from "@/types/product";
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
      <div className="grid lg:grid-cols-2 my-6 grid-cols-1 gap-10">
        <div className="mx-14 flex-1 h-full">
          <ImageSlider
            alt={`Product image of ${product.title}`}
            images={product.images}
          />
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight items-center  flex justify-between">
            <p>{product.title}</p>
            <Badge variant={"secondary"}>{product.category}</Badge>
          </h3>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-xl">₹{product.price}</p>
            {/* <p className="text-muted-foreground">{product.category}</p> */}
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
