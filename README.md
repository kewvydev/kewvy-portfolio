# Kevin Gonzalez — Portfolio

A Next.js 16 portfolio built with the App Router, strict TypeScript, Tailwind CSS, GSAP, and Lucide.

## Development

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Before shipping:

```bash
pnpm lint
pnpm build
pnpm start
```

## Content and design

- `lib/portfolio.ts` contains project, experience, skill, and highlight data. Keep experience, project details, and technical skills aligned with `public/Kevin_Gonzalez_Resume.pdf`.
- `app/page.tsx` composes the page sections in `components/`.
- `app/globals.css` defines the plum, lilac, pistachio, and peach palette, editorial layouts, tactile interactions, and responsive rules.
- Anton display and variable DM Sans are served through `next/font/local`. Font files and their SIL Open Font Licenses live in `app/fonts/`; builds do not fetch Google Fonts.
- The portrait, project screenshots, research paper, and CV remain in `public/`. Screenshots use `next/image`; each featured project has an accessible gallery and expandable contribution details.
- `components/Intro.tsx` opens a native modal on every page entry/reload. Three panels reveal the hero after a typographic sequence (~2 seconds). Escape or Skip intro dismisses it; a 2.8-second fallback releases interaction. Reduced motion uses a 0.4-second fade, including on deep links.
- `components/MotionScene.tsx` scopes GSAP and ScrollTrigger to the page and reverts them on unmount or media-query changes. The hero uses layered parallax; project images have shutters and staggered metadata; about uses a horizontal title reveal; experience draws a timeline; toolkit rows assemble beside a sticky desktop heading; research lands as a printed sheet; contact settles into place before interaction.
- `components/MotionScene.css` contains motion layers and tactile states. Smaller screens use shorter travel and no sticky toolkit heading. No scroll hijacking or pinned scrolling is used. Keyboard focus completes the relevant entrance immediately. Layout changes refresh ScrollTrigger through a cleaned-up ResizeObserver.
- Copy email, CV download, external links, gallery navigation, and form submission have visible feedback. Reduced motion disables scroll effects and CSS animation; it also takes precedence over ScrollTrigger’s inline smooth-scroll style when the preference changes at runtime. Core content remains visible without JavaScript.

## Contact

Set `RESEND_API_KEY` in an uncommitted `.env.local` to enable email delivery through `/api/contact`. The existing sender and recipient are preserved. The client displays sending, success, timeout, and error states while retaining the message after a failed request.

Resend is initialized only when sending a valid submission, so production builds do not require a secret. Without the key, the endpoint returns a service-unavailable response and the page offers a direct email link.

## Redesign validation

The redesign was checked in production with Chromium at 320, 390, 600, 768, 860, 861, 1024, and 1440 px. Checks covered repeated modal intros, Skip and Escape, direct hash entry, scroll-driven hero motion, section titles, horizontal overflow, keyboard navigation, galleries and disclosures, clipboard copying, CV download feedback, form success/error states using intercepted responses, live reduced-motion changes, content without JavaScript, and required-field API validation. Axe reported no WCAG A/AA violations on the desktop and mobile pages checked. Real email delivery requires the configured Resend key and was not exercised.

No application dependencies were added. Browser and accessibility tooling was used temporarily outside the project.
