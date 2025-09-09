import Image from "next/image";
import { stripe } from "@/lib/stripe";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Carousel } from "@/components/carousel";
import { ProductSlider } from "@/components/product-slider";
import {
  ShoppingBagIcon,
  TruckIcon,
  ShieldCheckIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

export default async function Home() {
  // Featured Products for Carousel (5 products)
  const featuredProducts = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });

  // Trending Products for ProductSlider (8 products)
  const trendingProducts = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 8,
  });

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 sm:py-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative mx-auto grid grid-cols-1 items-center justify-items-center gap-12 px-8 sm:px-16 md:grid-cols-2">
          <div className="max-w-lg space-y-6">
            <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800">
              ✨ New Collection Available
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                NovaTrend
              </span>
            </h1>
            <p className="text-lg leading-relaxed text-gray-600">
              Discover the latest trends with our curated collection of premium
              products. Quality, style, and affordability - all in one place.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-white hover:bg-gray-800 transition-all duration-200 hover:scale-105"
              >
                <Link href="/products">
                  <ShoppingBagIcon className="mr-2 h-5 w-5" />
                  Shop Now
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="inline-flex items-center justify-center rounded-full border-2 border-gray-300 px-8 py-4 hover:bg-gray-50 transition-all duration-200"
              >
                <Link href="#featured">
                  <HeartIcon className="mr-2 h-5 w-5" />
                  View Collection
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 blur-lg"></div>
            <Image
              alt="Featured Product"
              width={500}
              height={500}
              className="relative rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105"
              src={featuredProducts.data[0]?.images[0] || "/placeholder.jpg"}
              priority
            />
          </div>
        </div>
      </section>

      {/* Featured Products Carousel */}
      <section id="featured" className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Check out our most popular items, handpicked for quality and
              style.
            </p>
          </div>
          <Carousel products={featuredProducts.data} />
        </div>
      </section>

      {/* Product Slider */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trending Products
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Discover what&apos;s popular right now with our trending product
              selection.
            </p>
          </div>
        </div>
        <div className="bg-white py-8 w-full">
          <div className="mx-auto max-w-7xl px-4">
            <ProductSlider products={trendingProducts.data} />
          </div>
        </div>
      </section>

      {/* Why Choose NovaTrend Section */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose NovaTrend?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              We&apos;re committed to providing you with the best shopping experience
              through quality products and exceptional service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <TruckIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Free Shipping
              </h3>
              <p className="text-gray-600">
                Free delivery on all orders over $50. Fast and reliable shipping
                worldwide.
              </p>
            </div>
            <div className="text-center space-y-4 p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <ShieldCheckIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Secure Payment
              </h3>
              <p className="text-gray-600">
                Your payment information is encrypted and secured by Stripe.
              </p>
            </div>
            <div className="text-center space-y-4 p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                <HeartIcon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Quality Guaranteed
              </h3>
              <p className="text-gray-600">
                30-day return policy. We stand behind the quality of our
                products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black rounded-2xl mx-4">
        <div className="text-center space-y-6 px-4">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Start Shopping?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join thousands of satisfied customers and discover your new favorite
            products today.
          </p>
          <Button
            asChild
            size="lg"
            className="inline-flex items-center justify-center rounded-full bg-white text-black px-8 py-4 hover:bg-gray-100 transition-all duration-200 hover:scale-105"
          >
            <Link href="/products">
              <ShoppingBagIcon className="mr-2 h-5 w-5" />
              Explore All Products
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
