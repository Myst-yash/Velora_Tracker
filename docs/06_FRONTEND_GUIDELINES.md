# Velora Frontend Guidelines

Version: 1.0.0

Status: Draft

---

# Overview

This document defines the frontend engineering standards for Velora.

Every frontend implementation must follow these guidelines to ensure consistency, maintainability, scalability, and a premium user experience.

---

# Core Principles

- Component First
- Reusability
- Type Safety
- Accessibility
- Performance
- Responsive Design
- Consistency
- Simplicity

---

# Technology Stack

Framework

- Next.js (App Router)

Language

- TypeScript

Styling

- Tailwind CSS

UI Components

- shadcn/ui

Animations

- Framer Motion

State Management

- Zustand

Server State

- TanStack Query

Forms

- React Hook Form

Validation

- Zod

---

# Folder Organization

Frontend should be organized by responsibility.

Examples

- app
- components
- features
- hooks
- lib
- services
- providers
- store
- types
- utils
- styles

Every folder should have a single responsibility.

---

# Component Guidelines

Every component should:

- Be reusable
- Be typed
- Accept props
- Avoid duplicated logic
- Remain focused on one responsibility

Avoid large components.

Split complex UI into smaller reusable components.

---

# Page Guidelines

Pages should:

- Handle layout
- Fetch required data
- Compose components

Pages should not contain business logic.

---

# State Management

Global State

Use for

- Authentication
- Theme
- Sidebar
- User Session

Server State

Use TanStack Query

Examples

- Movies
- Games
- Reviews
- Recommendations
- Statistics

Local State

Use React State

Examples

- Dialog Open
- Form Input
- Search Input
- Dropdown State

---

# API Communication

Never communicate directly with external APIs.

All requests must go through the Express backend.

Use a centralized API service.

---

# Forms

Every form should use:

- React Hook Form
- Zod Validation

Support

- Validation
- Error Messages
- Loading State
- Disabled State

---

# Routing

Use App Router.

Protect authenticated pages.

Use nested layouts where appropriate.

---

# Styling Rules

Only use Tailwind utility classes.

Avoid inline styles.

Avoid duplicated styles.

Use reusable utility classes whenever possible.

---

# Responsive Design

Every page must support:

- Mobile
- Tablet
- Desktop

Responsive design is mandatory.

---

# Animations

Use Framer Motion.

Animation should be:

- Smooth
- Fast
- Consistent

Use animations for:

- Page transitions
- Cards
- Buttons
- Dialogs
- Loading
- Progress

Avoid unnecessary animations.

---

# Loading States

Every page should display:

- Skeleton Loader
- Spinner
- Loading Indicator

Never display blank screens.

---

# Error Handling

Every page should gracefully handle:

- API Errors
- Network Errors
- Unauthorized Access
- Empty Data

Provide meaningful feedback.

---

# Empty States

Provide dedicated UI for:

- Empty Collections
- Empty Reviews
- Empty Dashboard
- Empty Notifications
- Empty Search Results

---

# Accessibility

Support:

- Keyboard Navigation
- Screen Readers
- Focus States
- ARIA Labels
- High Contrast
- Reduced Motion

Accessibility is required.

---

# Images

Use Next.js Image component.

Optimize images.

Lazy load whenever possible.

Use placeholders during loading.

---

# Icons

Use one icon library throughout the application.

Icons should remain visually consistent.

---

# Theme

Support

- Dark Mode
- Light Mode

Dark mode is the default.

Theme preference should persist.

---

# Performance

Optimize:

- Images
- Fonts
- Bundles
- Lazy Loading
- Code Splitting

Avoid unnecessary re-renders.

---

# Reusable Components

Examples

- GlassButton
- GlassCard
- GlassInput
- MediaCard
- MovieCard
- SeriesCard
- GameCard
- ProgressRing
- RatingStars
- ReviewCard
- SearchBar
- Sidebar
- Navbar
- DashboardWidget

Always reuse existing components before creating new ones.

---

# Code Quality

Frontend code should be:

- Readable
- Modular
- Reusable
- Strongly Typed
- Consistent

Avoid duplicated logic.

---

# Security

Never expose:

- Secrets
- Tokens
- Database Credentials

Always rely on backend authentication.

---

# Definition of Done

A frontend feature is complete when it:

- Is responsive
- Is accessible
- Is reusable
- Uses TypeScript
- Includes loading states
- Includes empty states
- Includes error handling
- Matches the design system
- Works on desktop, tablet, and mobile
- Passes linting without errors
