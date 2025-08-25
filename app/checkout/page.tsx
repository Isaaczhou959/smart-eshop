"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCartStore } from "@/store/cart-store";
import { Trash } from "lucide-react";
import { checkoutAction } from "./checkout-action";

export default function Productspage() {
  const { items, removeItem, addItem, clearCart } = useCartStore();
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (total == 0 || items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold">
          “Oops! Your cart is feeling lonely...”
        </h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="text-3xl font-bold mb-4 text-center">Checkout</h1>
      <Card className="border border-white/20 max-w-md mx-auto mb-8">
        <CardHeader className="flex justify-between items-center">
          <CardTitle className="text-xl font-bold">Order Summary</CardTitle>
          <Trash onClick={() => clearCart()}></Trash>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex flex-col gap-2 border-b border-gray-300 pb-2"
              >
                <div className="flex justify-between">
                  <span className="font-medium">{item.name} </span>
                  <span className="font-semibold">
                    ${((item.price * item.quantity) / 100).toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant={"outline"}
                    onClick={() => removeItem(item.id)}
                    size="sm"
                    className="hover:bg-gray-100 active:scale-95 transition-transform duration-150"
                  >
                    -
                  </Button>
                  <span className="text-lg font-semibold">{item.quantity}</span>
                  <Button
                    onClick={() => addItem({ ...item, quantity: 1 })}
                    size="sm"
                    variant={"outline"}
                    className="bg-black text-white hover:bg-gray-800 active:scale-95 transition-transform duration-150"
                  >
                    +
                  </Button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-4 border-t  border-gray-400 pt-2 text-lg font-semibold">
            Total: ${(total / 100).toFixed(2)}
          </div>
        </CardContent>
      </Card>
      <form action={checkoutAction} className="max-w-md mx-auto">
        <input type="hidden" name="items" value={JSON.stringify(items)} />
        <Button
          variant={"default"}
          className="bg-black text-white w-full shadow-md hover:bg-gray-800 active:scale-95"
        >
          Proceed to Payment
        </Button>
      </form>
    </div>
  );
}
