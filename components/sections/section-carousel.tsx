import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ICarousel {
  opts?: {
    align?: "start" | "center";
  };
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export default function SectionCarousel(props: ICarousel) {
  const { opts, orientation, className } = props;

  return (
    <div className="flex justify-center items-center">
      <Carousel
        opts={{ align: opts?.align || "center" }}
        className={className || "max-w-7xl"}
        orientation={orientation || "horizontal"}
      >
        <CarouselContent>
          {["davi1", "davi2", "davi3", "davi4", "davi5"].map(
            (_, index) => (
              <CarouselItem key={index} className="pt-1 md:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex items-center justify-center p-6">
                      <span className="text-3xl font-semibold">{_}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            )
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
