![Leancontinuo](./public/logomark.png)

# leancontinuo

> Evolución interna y externa · curiosidad y creación para elevar la humanidad

[Portfolio and personal brand](https://leancontinuo.com) site showcasing professional experience, interests, articles, and an AI chat assistant.

Note: this is the **front-end** of the project. The back-end can be [found here](https://github.com/leancontinuo/lean-back).

---

## Brand

**leancontinuo** is a personal brand centered on continuous evolution—both internal and external. It combines curiosity, creation, and a commitment to elevate humanity through technology, philosophy, and lifelong learning. The site presents experience, interests in data analysis, software engineering, blockchain, arts, and philosophy, plus articles and external resources.

---

## Design: Brutalist Minimalism

The layout follows a **brutalist minimalism** style:

- **Modular grid** — Content is organized in clear, card-based blocks with rounded corners and explicit separation
- **Strong hierarchy** — Sections like EXPERIENCIA, INTERESES, DATOS, and articles each occupy distinct tiles
- **Limited palette** — Blue, Green, and neutral grays for readability
- **Functional typography** — Sans-serif (DM Sans) and serif (Outfit)
- **No excess decoration** — Focus on content over ornamentation
- **Responsive layout** — CSS Grid adapts from mobile to desktop while preserving the modular structure

---

## Features

- **AI Chat** — "Artificial Lean" chat assistant via `/chat`
- **Article carousel** — Essays and reflections
- **Experience showcase** — Logos and links to institutions and employers
- **Interests loop** — Scrolling list of interests
- **External resources** — Links to talks, podcasts, blog posts, and builds
- **Legal pages** — Privacy policy and terms of service

---

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **GSAP & Motion** — Animations
- **react-markdown** — Markdown rendering

---

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/leancontinuo/lean-front.git
cd lean-front

# Install dependencies
pnpm install

# copy environment variables
cp .env.example .env
```

### Environment Variables

Edit `.env` with your API keys if using the AI chat or analytics features.

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
pnpm build
pnpm start
```

---

## Author

**Leandro Guardia**

[MIT LICENSE](LICENSE)