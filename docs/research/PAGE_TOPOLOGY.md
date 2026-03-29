# Page Topology — Sadewa AI Automation Agency

## Overall Layout
- Single-page scroll layout, no smooth scroll library (native browser scroll)
- White background (#fff), dark sections for comparison table, CTA, footer
- Sticky navbar at top (z-index overlay)
- All sections flow vertically

## Sections (top to bottom)

### 1. Navbar (sticky overlay)
- Logo (SVG) + nav links + "Work with us" CTA button
- Links: Case Studies, Services, About Us, Blog, Careers
- Background changes on scroll (transparent → white with shadow)

### 2. Hero Section
- Left: Large headline "Smart AI Automation for Growing Brands."
- Right: Video player thumbnail + 3D rendered illustration
- Below headline: Description paragraph + 2 CTA buttons (Get Free Consultation, Work with us)
- Below CTAs: "TRUSTED BY 300+ COMPANIES" logo marquee (5 logos, scrolling)
- Interaction: Static, logo marquee auto-scrolls

### 3. Pain Points Section
- 4 floating warning badges positioned around center
- Center: Large heading "Eliminate the bottlenecks that hold you back"
- Badge texts: repetitive tasks, leads slip away, outdated workflows, scaling costs
- Interaction: Static

### 4. Services Section ("Automation solutions")
- Label: "OUR SERVICES" (Roboto Mono)
- 2-column header: heading left, description right
- 3x2 grid of service cards, each with 3D illustration + title + description
- Services: AI strategy & consulting, AI content creation, AI agent development, CRM AI automation, AI process automation
- Interaction: Static

### 5. Case Studies ("Latest works")
- Label: "CASE STUDIES"
- Header: "Latest works" + "More case studies" link
- Two case study cards stacked vertically:
  - Card 1: Design Studio (2022) - laptop mockup image, dark bg, metrics (40%, 3, 2x)
  - Card 2: Lead Routing Agent (2025) - monitor mockup image, dark bg, metrics (2x, 35%, $1.5M+)
- Interaction: Static

### 6. Process Section ("Our Approach")
- Label: "OUR APPROACH"
- 4 steps: Discover (/01), Plan (/02), Build (/03), Scale (/04)
- Each step: large number in light gray, 3D icon, heading, description
- 2-column layout per step (icon left, text right or alternating)
- Interaction: Static

### 7. Testimonials
- Label: "TESTIMONIALS"
- Large quote text (40px), person name, role
- 3 testimonials (likely carousel or stacked)
- Testimonial 1: Rizki Anugrah, Product Manager of Blockhaus
- Testimonial 2: Evelyn Tanuwidjaja, Marketing Manager of Batavia
- Testimonial 3: Windi Kulina, CMO of Bima
- Interaction: Possibly carousel/auto-scroll

### 8. Comparison Section ("The difference is clear")
- Heading: "The difference is clear"
- Two-column comparison table
- Left (dark bg, white text): Sadewa advantages (7 items with green checkmarks)
- Right (light bg): Other Agencies disadvantages (7 items with red X marks)
- Interaction: Static

### 9. Tech Stack
- Label: "TECHNOLOGIES"
- Heading: "Tech stack we use"
- 5 tech items in a row: OpenAI, Zapier, Airtable, Langchain, Python
- Each with number (/01-/05), icon, name
- Interaction: Static

### 10. Team Section ("Meet the Visionaries")
- Label: "ABOUT US"
- Heading: "Meet the Visionaries"
- Description + "About Us" button
- "Join us" card with careers link
- 4 team members in grid: photo, number, name, role, description
  - Bayu Pratama (CEO)
  - Putri Ananda (CTO)
  - Gilang Nugroho (VP Engineering)
  - Dinda Kumalasari (VP Design)
- Interaction: Static

### 11. Pricing Section
- Label: "PRICING"
- Heading: "Choose your plan"
- Yearly/Monthly toggle (Yearly has green accent, "save 20%")
- 3 pricing cards:
  - Starter: $999→$799/month, white bg
  - Growth: $2499→$1999/month, dark bg, green accent (featured)
  - Enterprise: "Get quote", white bg
- Interaction: Click toggle between yearly/monthly pricing

### 12. FAQ Section
- Label: "FAQ"
- Heading: "Frequently Asked Questions"
- 5 accordion items with + icon
- Interaction: Click to expand/collapse FAQ items

### 13. Blog Section ("Latest insights")
- Label: "/BLOG"
- Heading: "Latest insights" + "More insights" link
- 3 blog cards:
  - Featured (large): "From Data to Decisions..."
  - Small card: "AI Personalization..."
  - Small card: "The Hidden Costs..."
- Each with image, category tag, date, title, description
- Interaction: Static

### 14. CTA Section
- Dark gradient background (rgb(19,19,19) → rgb(58,58,58))
- Heading: "Ready to implement AI in your business?"
- "Get Free Consultation" button with green accent
- Interaction: Static

### 15. Footer
- Dark background (continues from CTA)
- Left: Email (hello@sadewa.com, green color), Phone (+1234 567 89)
- Center: Navigation links (Home, Services, Case Studies, Blog, Waitlist, 404)
- Center: Company links (About Us, Careers, Contact Us)
- Center: Legal (Terms, Privacy Policy)
- Right: Social links (X/Twitter, Instagram, Behance, Telegram, LinkedIn)
- Bottom: Copyright, large Sadewa logo watermark
- Interaction: Static

## Design Tokens Summary
- Primary font: Satoshi (400, 500, 600, 700)
- Mono font: Roboto Mono (400)
- Primary text: #131313
- Secondary text: #797979
- Body alt text: #3a3a3a
- Accent green: #98FE00
- Light gray: #D3D3D3
- Background: #FFFFFF
- Dark bg: #131313
- Section dividers: #F3F3F3
