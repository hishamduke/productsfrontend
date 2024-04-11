"use client";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRef } from "react";
import Image from "next/image";

export default function ImageSlider({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true, jumb: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full   mx-auto flex flex-col h-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="w-full">
        {images.map((i, index) => (
          <CarouselItem key={index}>
            <div className="p-2 ">
              <Card className="border-0 shadow-none">
                <CardContent className="flex aspect-square items-center justify-center p-0 sm:p-6  max-w-xl  mx-auto">
                  <Image
                    src={i}
                    alt={alt}
                    width={300}
                    height={400}
                    className="max-w-lg h-full  object-contain"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  );
}
