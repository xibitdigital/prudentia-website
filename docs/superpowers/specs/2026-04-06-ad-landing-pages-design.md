# Ad Landing Pages Design Spec

Two targeted landing pages for Google Ads campaigns, also accessible from the main site navigation.

## Pages

1. **Therapy for Men** — `/public/therapy-for-men.html` → `prudentiaps.com/therapy-for-men`
2. **Couples Therapy** — `/public/couples-therapy.html` → `prudentiaps.com/couples-therapy`

## Shared Structure

### Layout: Compact Hero + Grid

- Hero section with headline + subtext on the left, pain points checklist card on the right (side-by-side on desktop, stacked on mobile)
- Content sections below in a grid layout
- Credentials band with accreditation badges
- Final footer

### Header (sticky)

- Prudentia logo (left)
- "Dr. Sonia Sangalli" text (right, next to CTA)
- "Free Consultation" CTA button (right) — links to `https://prudentiaps.com/#contact`

### Credentials Band

- "Dr. Sonia Sangalli — Chartered Psychologist, nearly 20 years' experience"
- HCPC, BABCP, BPS accreditation badges (images from main site)

### Footer (centred, dark)

- "Prudentia Psychological Services"
- "HCPC Registered · BABCP Accredited · BPS Chartered"
- Links: Visit Main Site, All Services, Privacy Policy
- Copyright © 2026

### CTA Behaviour

- All CTA buttons link to `https://prudentiaps.com/#contact`
- Google Ads conversion tracking carried over from main site

### Styling

- Tailwind CSS — reuse existing `tailwind.css` compiled output
- Inter font (Google Fonts)
- Colour palette: teal-soft (`#4FD1C7`), blue-gentle (`#60A5FA`), warm-white (`#FEFEFE`), ocean (`#0EA5E9`)
- Gradient backgrounds matching main site (blue-50 → teal-50)
- Rounded cards, shadows, hover effects consistent with main site
- Responsive: mobile-first, stacks to single column on small screens
- Smooth scroll, intersection observer animations (reuse `form.js`)

### SEO

- Unique `<title>` and `<meta description>` per page
- Open Graph and Twitter Card meta tags
- JSON-LD structured data (ProfessionalService, scoped to page topic)
- Canonical URLs
- Update `sitemap.xml` to include both new pages
- `lang="en-GB"`

### What is NOT included

- No pricing or insurance info — keep pages lean and emotional
- No full about/bio section — credentials line + badges only
- No embedded contact form — CTA links to main site `#contact`

## Page 1: Therapy for Men

### Hero Section

**Headline:** "On the surface, things are fine. But something doesn't feel right."

**Subtext:** You're managing work, responsibilities, and expectations—but internally you may feel stuck, flat, or under pressure. Therapy offers a space to step back, gain clarity, and find a way forward that actually works.

**CTA:** Request a free consultation

### Pain Points Card (beside hero)

**Heading:** You might recognise some of this:

- Feeling constantly under pressure or mentally exhausted
- Struggling to switch off from work
- Relationship difficulties or emotional distance
- A sense of dissatisfaction despite outward success
- Irritability, low mood, or feeling "flat"
- Questioning where things are going or what comes next

### "How I work" Section

My approach is thoughtful, practical, and focused. We won't just talk in circles—we'll work to understand what's going on beneath the surface and identify what needs to change.

With nearly 20 years' experience, I help people:

- Make sense of what they're feeling
- Break unhelpful patterns
- Improve relationships
- Regain a sense of direction and control

### "Why therapy?" Section

Many people I work with are used to handling things on their own. Therapy isn't about weakness—it's about having a space where you don't have to carry everything alone.

## Page 2: Couples Therapy

### Hero Section

**Headline:** "You're talking—but not really getting through to each other."

**Subtext:** Whether things feel tense, distant, or stuck in the same arguments, couples therapy can help you understand what's happening and find a way forward—together.

**CTA:** Book an initial consultation

### Pain Points Card (beside hero)

**Heading:** Couples often come to me when they're dealing with:

- Communication breakdowns
- Repeated arguments that go nowhere
- Emotional distance or disconnection
- Trust issues or infidelity
- Life transitions putting strain on the relationship

### "What we'll do" Section

In our sessions, we slow things down and create space for both of you to be heard properly.

We work to:

- Understand patterns between you
- Reduce conflict and defensiveness
- Improve communication
- Rebuild trust and connection

### Tone Section

The focus isn't on "who's right"—it's on understanding what's happening between you and how things can change.

**CTA:** Book an initial consultation to see if couples therapy feels like the right next step.

## Main Site Integration

- Add "Therapy for Men" and "Couples Therapy" links to the main site
- Placement: Add as "Learn More" links on the relevant service cards in the `#services` section (e.g., the existing "Personal Growth" or general cards could link to the men's page; "Relationship Issues" card could link to couples page)
- Do NOT add to the header nav — keep the header clean and focused on anchors

## Files to Create/Modify

| Action | File |
|--------|------|
| Create | `/public/therapy-for-men.html` |
| Create | `/public/couples-therapy.html` |
| Modify | `/public/index.html` — add nav links to landing pages |
| Modify | `/public/sitemap.xml` — add new URLs |
| Modify | `/tailwind.config.js` — ensure content glob covers new files (already does: `./public/**/*.html`) |
