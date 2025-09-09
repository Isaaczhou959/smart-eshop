"use client";
import Stripe from "stripe";
import { useEffect, useState } from "react";
import { Card, CardContent, CardTitle } from "./ui/card";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface Props {
  products: Stripe.Product[];
}

export const Carousel = ({ products }: Props) => {
  const [current, setCurrent] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % products.length);
        setIsTransitioning(false);
      }, 200);
    }, 4000);
    return () => clearInterval(interval);
  }, [products.length]);

  const goToPrevious = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + products.length) % products.length);
      setIsTransitioning(false);
    }, 200);
  };

  const goToNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % products.length);
      setIsTransitioning(false);
    }, 200);
  };

  const currentProduct = products[current];
  const price = currentProduct.default_price as Stripe.Price;

  return (
    <Card className="relative bg-white overflow-hidden rounded-lg shadow-md border-gray-300 group">
      {currentProduct.images && currentProduct.images[0] && (
        <div className="relative h-80 w-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
          <Image
            alt={currentProduct.name}
            src={currentProduct.images[0]}
            width={400}
            height={320}
            className={`transition-all duration-500 ease-in-out object-contain max-h-full max-w-full group-hover:scale-105 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
            priority
          />
        </div>
      )}

      {/* 文字内容区域 */}
      <CardContent className="absolute bottom-0 left-0 right-0 p-6">
        <div className="text-center">
          {/* 产品名称和价格组合 */}
          <div
            className={`bg-black/30 px-6 py-4 rounded-lg backdrop-blur-sm border border-white/20 inline-block transition-all duration-500 ease-in-out transform ${
              isTransitioning
                ? "opacity-0 translate-y-2"
                : "opacity-100 translate-y-0"
            }`}
          >
            <div className="flex items-center justify-center space-x-4">
              <CardTitle className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                {currentProduct.name}
              </CardTitle>
              {price && price.unit_amount && (
                <span className="inline-block bg-white/90 text-gray-900 px-3 py-1 rounded-full text-lg font-bold shadow-sm">
                  ${(price.unit_amount / 100).toFixed(2)}
                </span>
              )}
            </div>
          </div>
        </div>
      </CardContent>

      {/* 导航按钮 */}
      <button
        onClick={goToPrevious}
        className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:scale-105 backdrop-blur-sm rounded-full p-2 transition-all duration-200 shadow-lg"
        aria-label="Previous product"
      >
        <ChevronLeftIcon className="h-6 w-6 text-white" />
      </button>

      <button
        onClick={goToNext}
        className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:scale-105 backdrop-blur-sm rounded-full p-2 transition-all duration-200 shadow-lg"
        aria-label="Next product"
      >
        <ChevronRightIcon className="h-6 w-6 text-white" />
      </button>

      {/* 指示器 */}
      {/* <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex space-x-2">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === current
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}
    </Card>
  );
};
