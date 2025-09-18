"use client";

import Stripe from "stripe";
import { useState, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

interface Props {
  products: Stripe.Product[];
}

export const ProductSlider = ({ products }: Props) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // 每次滑动的距离（一个商品卡片的宽度 + 间距）
  const slideWidth = 320; // 卡片宽度 + gap

  // 计算最大滑动距离
  const maxScroll = Math.max(
    0,
    products.length * slideWidth - (sliderRef.current?.clientWidth || 0)
  );

  const scrollLeft = () => {
    const newPosition = Math.max(0, scrollPosition - slideWidth * 2); // 一次滑动2个商品
    setScrollPosition(newPosition);
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    const newPosition = Math.min(maxScroll, scrollPosition + slideWidth * 2); // 一次滑动2个商品
    setScrollPosition(newPosition);
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full relative">
      {/* 左侧导航按钮 */}
      <button
        onClick={scrollLeft}
        disabled={scrollPosition <= 0}
        className="absolute cursor-pointer left-2 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 border border-gray-200"
        aria-label="Scroll left"
      >
        <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
      </button>

      {/* 右侧导航按钮 */}
      <button
        onClick={scrollRight}
        disabled={scrollPosition >= maxScroll}
        className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 border border-gray-200"
        aria-label="Scroll right"
      >
        <ChevronRightIcon className="h-6 w-6 text-gray-700" />
      </button>

      {/* 商品滑动容器 */}
      <div className="relative overflow-hidden">
        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product) => {
            const price = product.default_price as Stripe.Price;

            return (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="flex-shrink-0"
              >
                <Card className="w-72 h-96 group hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300">
                  {/* 商品图片 */}
                  <div className="relative h-56 w-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden rounded-t-lg">
                    {product.images && product.images[0] && (
                      <Image
                        alt={product.name}
                        src={product.images[0]}
                        width={280}
                        height={220}
                        className="object-contain max-h-full max-w-full group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                  </div>

                  {/* 商品信息 */}
                  <CardContent className="p-5 flex flex-col justify-between flex-grow">
                    <div>
                      <CardTitle className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                        {product.name}
                      </CardTitle>
                    </div>

                    <div className="flex items-center justify-between mt-auto">
                      {price && price.unit_amount && (
                        <span className="text-2xl font-bold text-gray-900">
                          ${(price.unit_amount / 100).toFixed(2)}
                        </span>
                      )}
                      <Button
                        size="sm"
                        className="bg-black text-white hover:bg-gray-800 transition-colors duration-200 px-4 py-2"
                        onClick={(e) => {
                          e.preventDefault(); // 阻止Link跳转
                          e.stopPropagation();
                          // 这里可以添加加入购物车的逻辑
                          console.log("Add to cart:", product.name);
                        }}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* 渐变边缘效果 */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};
