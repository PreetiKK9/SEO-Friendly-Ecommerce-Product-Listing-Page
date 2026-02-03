import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "PlatinumRx | Online Pharmacy",
  description:
    "Buy medicines, vitamins, and health supplements online from PlatinumRx.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav aria-label="Main navigation" >
            <a href="/products" className="products-link">Products</a>
          </nav>
        </header>

        <main>{children}</main>

        <footer>
          <p>© PlatinumRx</p>
        </footer>
      </body>
    </html>
  );
}
