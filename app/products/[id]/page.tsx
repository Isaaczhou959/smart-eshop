import { stripe } from "@/lib/stripe";
import { ProductDetail } from "@/components/product-detail";
export default async function ProductPage(props: { params: { id: string } }) {
  const params = await props.params;
  const product = await stripe.products.retrieve(params.id, {
    expand: ["default_price"],
  });
  const plainProduct = JSON.parse(JSON.stringify(product));
  return <ProductDetail product={plainProduct} />;
}
