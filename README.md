SEO-Friendly E-commerce Product Listing Page (PLP)
--------------------------------------------------

This project implements a consumer-facing e-commerce Product Listing Page (PLP) with a Product Detail
Page (PDP) using Next.js App Router. The focus is on SEO fundamentals, performance, accessibility, and
production-quality frontend decisions.


TECH STACKS
- Framework: Next.js (App Router)
- Language: TypeScript
- Styling: Plain CSS
- Data Source: Static JSON (mock catalog)
- Rendering Strategy: Static Site Generation (SSG)


Features Implemented
Product Listing Page (PLP)
- Responsive product grid
- Product image, name, price, short description
- Navigation to Product Detail Page


Product Detail Page (PDP)
- Individual crawlable URLs
- Full product description
- Schema.org Product structured data


SEO CONSIDERATIONS

Semantic HTML

Uses header, main, section, article, and proper heading hierarchy to improve crawlability and accessibility.

Metadata

Page-level titles and descriptions are defined using Next.js metadata APIs.

Structured Data

Product pages include JSON-LD using Schema.org Product.

Crawlability & Rendering

The project uses Static Site Generation (SSG) to ensure HTML is fully rendered at build time. Dynamic
product routes are pre-generated, making all pages indexable by search engines.

PERFORMANCE

Image Optimization

- Native lazy loading for product images
- Explicit dimensions to prevent layout shift
- SVGs rendered using standard img tags to avoid unnecessary optimization

Largest Contentful Paint (LCP)

- Optimized images
- Minimal JavaScript
- Pre-rendered HTML

Cumulative Layout Shift (CLS)

- Fixed image dimensions
- No layout-affecting late-loading elements

ACCESSIBILITY

- Meaningful alt text for images
- Keyboard-navigable links
- Semantic HTML for screen readers

SEO-FRIENDLY PAGINATION

Pagination is not rendered in the demo UI due to the small mock dataset. In a production-scale catalog,
URL-based pagination (e.g. ?page=2) with crawlable links would be implemented to ensure scalability and
SEO correctness.

QUESTIONS
1. What makes this page SEO-friendly?
Semantic HTML, SSG, metadata, structured data, and optimized images.
2. What would you change for 100,000 products?
Introduce pagination, ISR, backend APIs, caching, and category-based indexing.
3. Common SEO mistakes frontend engineers make?
Client-only rendering, missing metadata, CLS issues, and infinite scroll without crawlable URLs.
4. SPA vs SSR/SSG SEO differences?
SSR/SSG provides immediate HTML for crawlers, while SPAs rely on JavaScript execution.
5. Measuring SEO and performance in production?
Lighthouse, PageSpeed Insights, Google Search Console, and Real User Monitoring.


SETUP INSTRUCTIONS
npm install
npm run dev

CONCLUSION

This project demonstrates SEO-aware frontend development, performance optimization, accessibility best
practices, and scalable architectural thinking aligned with production standards.