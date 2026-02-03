export type Product = {
  id: number;
  name: string;
  slug: string;
  price: number;
  shortDescription: string;
  description: string;
  image: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Vitamin C Tablets",
    slug: "vitamin-c-tablets",
    price: 499,
    shortDescription: "Supports immunity and skin health",
    description:
      "Vitamin C tablets help boost immunity, improve skin health, and act as a powerful antioxidant.",
    image: "/images/vitamin-c.svg",
  },
  {
    id: 2,
    name: "Omega 3 Fish Oil",
    slug: "omega-3-fish-oil",
    price: 899,
    shortDescription: "Heart and brain support",
    description:
      "Omega 3 Fish Oil supports cardiovascular health and brain function.",
    image: "/images/omega-3.svg",
  },
];
