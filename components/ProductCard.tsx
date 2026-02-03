import Link from "next/link";
import { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article>
      <Link
        href={`/products/${product.slug}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <img
          src={product.image}
          alt={`${product.name} product image`}
          width={40}
          height={50}
          loading="lazy"
        />

        <h2>{product.name}</h2>
      </Link>

      <p>{product.shortDescription}</p>
      <strong>₹{product.price}</strong>
    </article>
  );
}
