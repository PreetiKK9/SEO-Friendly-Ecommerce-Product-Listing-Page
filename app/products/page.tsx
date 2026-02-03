import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Vitamins & Supplements | PlatinumRx",
  description: "Browse vitamins and supplements for daily wellness.",
};

type PageProps = {
  searchParams?: Promise<{
    minPrice?: string;
    maxPrice?: string;
  }>;
};

export default async function ProductsPage({ searchParams }: PageProps) {
  const params = await searchParams;

  const min = Number(params?.minPrice ?? 0);
  const max = Number(params?.maxPrice ?? Infinity);

  const filteredProducts = products.filter(
    (p) => p.price >= min && p.price <= max
  );

  return (
    <section>
      <header>
        <h1>Vitamins & Supplements</h1>
        <p>Trusted health supplements delivered to your doorstep.</p>
      </header>

      <form aria-label="Filter products">
        <label>
          Min Price: {" "}
          <input type="number" name="minPrice" defaultValue={min || ""} />
        </label>

        <label style={{ marginLeft: "20px" }}>
          Max Price: {" "}
          <input type="number" name="maxPrice" defaultValue={max || ""} />
        </label>

        <button type="submit">Apply</button>
      </form>

      <section aria-label="Product list">
        <ul className="grid">
          {filteredProducts.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
