# The Language Friends

A multilingual, design-led educational website for **The Language Friends**, a children’s English picture book series focused on natural language acquisition through patterns, repetition, and visual clarity.

The site is built as a **static, e-book–first platform** that supports international families, prioritizes UX clarity, and scales as new books, characters, and learning content are added.

## Overview

**The Language Friends** is a gentle English-learning project designed for children ages 2–7 and their parents.Rather than teaching through explanation or memorization, the books and website emphasize:

- Repeated sentence patterns
- Strong visual cues
- Consistent structure
- Familiar characters
- Low cognitive load

The website supports this philosophy through a calm, accessible UI, modular content structure, and bilingual delivery (Japanese-first).

## Tech Stack

- **Framework:** Nuxt 4 (Vue 3)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** GSAP + ScrollTrigger
- **Icons:** @nuxt/icon
- **Internationalization:** @nuxtjs/i18n (EN / JP)
- **Forms:** Netlify Forms
- **Hosting:** Netlify
- **Build Type:** Static (SSR disabled)

## Key Features

### Multilingual Architecture

- Japanese-first content with English support
- Route-based localization using prefix_except_default
- Fully structured i18n JSON for scalable content growth

### UX-First Design System

- Consistent layout and spacing across pages
- Reusable components for cards, sections, and content blocks
- Visual hierarchy optimized for parents reading alongside children
- Minimal cognitive load and predictable interaction patterns

### Educational Structure

- Content mirrors the pedagogy of the books:

  - One pattern per book
  - One concept per series
  - Visual reinforcement over explanation

- Dedicated pages for:

  - How to use the books
  - Character introductions
  - Book series breakdowns

### Animation & Interaction

- Subtle GSAP scroll-based animations
- Motion used sparingly to guide attention, not distract
- Transitions designed to feel calm and intentional

### Netlify Forms Integration

- Lightweight contact form using Netlify Forms
- No backend or API required
- Submissions managed directly through the Netlify dashboard

## Deployment

The site is deployed on **Netlify** as a static Nuxt build.

- Netlify automatically detects and processes:

  - Static output
  - Netlify Forms

- No server configuration is required
- SEO metadata is managed via Nuxt app.head

## SEO & Accessibility

- Full metadata setup via Nuxt head
- Semantic HTML structure
- Accessible navigation and readable typography
- Clear alt text and image usage
- Mobile-first responsive layout

## Design Philosophy

This project intentionally avoids:

- Overly complex interactions
- Dense instructional text
- Gamification or reward mechanics

Instead, it focuses on:

- Calm, predictable UX
- Trust-building design for parents
- Language exposure through structure and repetition
- Visual clarity over explanation

## Status

The project is actively evolving as new books and series are released.The architecture is designed to support long-term growth without restructuring.

## License

This project is proprietary and part of **The Language Friends** educational series.All content, designs, and characters are protected.
