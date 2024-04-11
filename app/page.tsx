import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ofetcher } from "@/lib/ofetcher";
import type { TProduct } from "@/types/product";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Home() {
  const products = (await ofetcher("/products/featured")) as TProduct[];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-center flex-wrap gap-4 sm:justify-between">
        <h1 className="scroll-m-20 text-2xl  tracking-tight font-semibold ">
          Featured Products
        </h1>

        <Link href="/products">
          <Button variant={"outline"}>View all products</Button>
        </Link>
      </div>

      <div className="flex gap-4 flex-wrap justify-around">
        {products.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
}
