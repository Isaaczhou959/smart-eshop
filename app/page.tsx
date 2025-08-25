import Image from "next/image";
import { stripe } from "@/lib/stripe";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Carousel } from "@/components/carousel";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });

  // console.log(products);
  return (
    <div>
      <section className="rounded bg-neutral-100 py-8 sm:py-12 ">
        <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
          <div className="max-w-md space-y-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Welcome to my E-shop
            </h2>
            <p className="text-neutral-600">
              Your One-Stop Online Shop for Trendy, Practical, and Affordable
              Finds.
            </p>
            <Button
              asChild
              variant="default"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-black text-white"
            >
              <Link href="/products">Browse All Products</Link>
            </Button>
          </div>
          <Image
            alt="Banner Image"
            width={450}
            height={450}
            className="rounded"
            src={products.data[0].images[0]}
          />
        </div>
      </section>
      <section className="mt-8">
        <Carousel products={products.data} />
      </section>
    </div>
  );
}
