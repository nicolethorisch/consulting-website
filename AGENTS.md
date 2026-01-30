## Project Summary
A premium B2B consulting website for Nicole Thorisch, a KI & Analytics Consultant based in Munich. The website targets non-technical decision-makers in the Mittelstand with the goal of generating leads through Calendly and email. The design is inspired by fixsolutions.org with a clean, modern, enterprise aesthetic.

## Tech Stack
- **Framework**: Next.js 15 with App Router and Turbopack
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Radix UI primitives via shadcn/ui

## Architecture
```
src/
├── app/
│   ├── page.tsx          # Home page with Hero, Trust, Services, Impact, Why, Blog, FAQ, CTA sections
│   ├── leistungen/       # Services page
│   ├── vorgehen/         # Process/methodology page
│   ├── kontakt/          # Contact page
│   └── layout.tsx        # Root layout with Navigation and Footer
├── components/
│   ├── Navigation.tsx    # Fixed header with nav links and CTAs
│   ├── Footer.tsx        # Site footer with contact info
│   └── ui/               # shadcn/ui components
└── visual-edits/         # Orchids visual editing system
```

## User Preferences
- German language (de) for all content
- Use "KI" instead of "AI" everywhere
- No prices displayed - use "Personalisierte Lösungen anfragen" instead
- No stock photos with people
- Clean, enterprise aesthetic with lots of whitespace
- Primary CTA: "Gespräch vereinbaren" (Calendly)
- Secondary CTA: "Leistungen ansehen", phone, or email
- Button style inspired by fixsolutions.org: navy rounded buttons for primary actions
- Phone: +49 151 21343097
- Email: nicole.thorisch@gmail.com
- Calendly link: https://calendly.com/nicole-thorisch/30min

## Project Guidelines
- Use relative imports for local components (e.g., "../components/Navigation")
- External links must use `window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url } }, "*")` for iframe compatibility
- Calendly link: https://calendly.com/nicole-thorisch/30min
- Email: nicole.thorisch@gmail.com
- All buttons/CTAs should have orange gradient styling with hover effects

## Common Patterns
- Hero sections use `hero-gradient` class (dark navy with orange glow)
- Light sections use `section-light` class
- Cards use white background with subtle border and shadow
- Orange accent color: #ff6b35
- Navy primary color: #0a1628
- Use Framer Motion for scroll animations with `whileInView`
