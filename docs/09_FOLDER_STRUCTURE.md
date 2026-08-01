# Velora Folder Structure

Version: 1.0.0

Status: Draft

---

# Overview

This document defines the folder organization for the entire Velora project.

The goal is to maintain a clean, scalable, modular structure that supports future expansion without major restructuring.

---

# Root Directory

```text
velora/

├── client/
├── server/
├── docs/
├── .github/
├── .vscode/
├── .env.example
├── .gitignore
├── docker-compose.yml
├── package.json
├── README.md
```

---

# Client Structure (Next.js)

```text
client/

├── app/
├── components/
├── features/
├── hooks/
├── lib/
├── providers/
├── services/
├── store/
├── styles/
├── types/
├── utils/
├── public/
├── middleware.ts
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

# App Directory

```text
app/

├── (auth)/
├── (dashboard)/
├── movies/
├── series/
├── anime/
├── games/
├── collections/
├── reviews/
├── search/
├── profile/
├── settings/
├── achievements/
├── notifications/
├── globals.css
├── layout.tsx
├── page.tsx
├── loading.tsx
├── error.tsx
└── not-found.tsx
```

---

# Components

```text
components/

├── ui/
├── layout/
├── navigation/
├── dashboard/
├── media/
├── movie/
├── series/
├── anime/
├── game/
├── progress/
├── review/
├── collection/
├── statistics/
├── search/
├── forms/
├── dialogs/
├── common/
└── animations/
```

---

# Features

```text
features/

├── auth/
├── dashboard/
├── movies/
├── series/
├── anime/
├── games/
├── search/
├── recommendations/
├── collections/
├── reviews/
├── statistics/
├── achievements/
├── notifications/
├── profile/
└── settings/
```

---

# Hooks

```text
hooks/

├── useAuth.ts
├── useTheme.ts
├── useDebounce.ts
├── useInfiniteScroll.ts
├── useMedia.ts
├── useProgress.ts
├── useStatistics.ts
└── useRecommendations.ts
```

---

# Services

```text
services/

├── api/
├── auth/
├── movies/
├── series/
├── anime/
├── games/
├── search/
├── progress/
├── reviews/
├── ratings/
├── collections/
├── recommendations/
└── statistics/
```

---

# Store

```text
store/

├── authStore.ts
├── themeStore.ts
├── sidebarStore.ts
├── searchStore.ts
└── userStore.ts
```

---

# Utilities

```text
utils/

├── constants.ts
├── helpers.ts
├── formatDate.ts
├── formatNumber.ts
├── calculateProgress.ts
├── validation.ts
└── storage.ts
```

---

# Types

```text
types/

├── auth.ts
├── media.ts
├── movie.ts
├── series.ts
├── anime.ts
├── game.ts
├── review.ts
├── rating.ts
├── statistics.ts
└── api.ts
```

---

# Styles

```text
styles/

├── globals.css
├── animations.css
├── scrollbar.css
└── variables.css
```

---

# Public

```text
public/

├── images/
├── icons/
├── logos/
├── placeholders/
├── backgrounds/
└── fonts/
```

---

# Server Structure (Express)

```text
server/

├── src/
├── prisma/
├── tests/
├── .env.example
├── package.json
├── tsconfig.json
└── README.md
```

---

# Source Directory

```text
src/

├── config/
├── routes/
├── controllers/
├── services/
├── repositories/
├── middleware/
├── validators/
├── utils/
├── types/
├── constants/
├── integrations/
├── jobs/
├── app.ts
└── server.ts
```

---

# Routes

```text
routes/

├── auth.routes.ts
├── user.routes.ts
├── movie.routes.ts
├── series.routes.ts
├── anime.routes.ts
├── game.routes.ts
├── media.routes.ts
├── review.routes.ts
├── rating.routes.ts
├── collection.routes.ts
├── progress.routes.ts
├── recommendation.routes.ts
├── statistics.routes.ts
├── notification.routes.ts
└── search.routes.ts
```

---

# Controllers

```text
controllers/

├── AuthController.ts
├── UserController.ts
├── MovieController.ts
├── SeriesController.ts
├── AnimeController.ts
├── GameController.ts
├── ProgressController.ts
├── ReviewController.ts
├── CollectionController.ts
└── RecommendationController.ts
```

---

# Services

```text
services/

├── auth/
├── movie/
├── series/
├── anime/
├── game/
├── progress/
├── recommendation/
├── statistics/
├── review/
├── collection/
└── notification/
```

---

# Middleware

```text
middleware/

├── auth.ts
├── validation.ts
├── rateLimiter.ts
├── errorHandler.ts
├── logger.ts
└── notFound.ts
```

---

# Validators

```text
validators/

├── auth.validator.ts
├── user.validator.ts
├── movie.validator.ts
├── review.validator.ts
├── progress.validator.ts
└── collection.validator.ts
```

---

# Integrations

```text
integrations/

├── tmdb/
├── rawg/
├── jikan/
├── steam/
└── igdb/
```

---

# Prisma

```text
prisma/

├── schema.prisma
├── migrations/
├── seed.ts
└── seeds/
```

---

# Tests

```text
tests/

├── unit/
├── integration/
├── api/
└── setup/
```

---

# Documentation

```text
docs/

├── 00_PROJECT_MANIFEST.md
├── 01_PRODUCT_SPECIFICATION.md
├── 02_ARCHITECTURE.md
├── 03_DATABASE_SPEC.md
├── 04_API_SPEC.md
├── 05_UI_DESIGN_SYSTEM.md
├── 06_FRONTEND_GUIDELINES.md
├── 07_BACKEND_GUIDELINES.md
├── 08_CODING_STANDARDS.md
├── 09_FOLDER_STRUCTURE.md
└── 10_PHASE_ROADMAP.md
```

---

# Folder Structure Principles

- Feature-based organization where appropriate.
- Shared functionality belongs in common folders.
- Components should remain reusable.
- Business logic must stay inside the backend.
- Avoid circular dependencies.
- Keep folders focused on a single responsibility.
- Future media types should be added without restructuring the project.
- Mobile applications should be able to reuse the backend without modification.

---

# Definition of Done

The project structure is considered complete when:

- Every feature has a clear location.
- Responsibilities are separated correctly.
- Naming conventions are consistent.
- The structure supports future scalability.
- New developers can easily understand the project layout.
