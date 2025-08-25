import Link from "next/link";
import Stripe from "stripe";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

interface Props {
  product: Stripe.Product;
}
export const ProductCard = ({ product }: Props) => {
  const price = product.default_price as Stripe.Price;
  return (
    <Link href={`products/${product.id}`}>
      <Card className="group hover:shadow-2xl overflow-hidden transition duration-300 py-0 h-full flex flex-col border border-gray-300 gap-0">
        {product.images && product.images[0] && (
          <div className="relative h-80 w-full">
            <Image
              alt={product.name}
              src={product.images[0]}
              fill
              className="group-hover:opacity-90 transition-opacity duration-300 rounded-t-lg object-cover"
            />
          </div>
        )}
        <CardHeader className="p-4">
          <CardTitle className="text-xl font-bold text-gray-800">
            {product.name}
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground leading-relaxed">
            {product.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 flex-grow flex flex-col">
          <div className="flex flex-col mt-auto">
            {price && price.unit_amount && (
              <p className="text-xl font-semibold text-gray-900">
                ${(price.unit_amount / 100).toFixed(2)}
              </p>
            )}
            <Button className="mt-4 bg-black text-white">View Details</Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
