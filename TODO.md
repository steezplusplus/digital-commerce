# Backend

- Refactor database columns Color.value -> Color.slug, Size.value -> Size.slug. Update downstream typings.
- DB Schema has weird unique constraints. Look into proper uniqueness.
- Create better testing data in the seed:
  - Product with color and no size
  - Product with size and no color
  - Product with no size or color

# Frontend

- Product page scroll to product OR control @/components/ui/gallery
- FastMarquee and SlowMarquee to not show duplicate images
- Create Circular colors for images
- Create CartModal. Show items in cart
- In QuickShopModal add "Add To Cart" and product form. Control URL.
- Footer should have more information and links for good SEO.
- Show related products on Product page
- Create Order model. After checkout, route to a new page that shows the user their order. Thank them, and re-direct to the homepage.
- Toasts should show the product name, color and size when added to or removed from cart.

# Headless UI

- Remake ThemeSelect with HeadlessUI ListBox
- Remake Product Form Radio with HeadlessUI RadioGroup
- Remake ReactHotToast with HeadlessUI Popover

# Next 15 updates

- Do I still need to use useEffect to stop SSR?

# Finalizations

- Manual A11y testing
- Dependabot
- Code coverage
- LinkedIn post
