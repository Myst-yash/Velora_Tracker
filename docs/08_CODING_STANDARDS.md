# Velora Coding Standards

Version: 1.0.0

Status: Draft

---

# Overview

This document defines the coding standards followed throughout the Velora codebase.

Every developer and every implementation must follow these standards to maintain consistency, readability, maintainability, and scalability.

---

# Core Principles

- Readability First
- Consistency
- Simplicity
- Reusability
- Type Safety
- Maintainability
- Scalability
- Performance

---

# Programming Language

Frontend

- TypeScript

Backend

- TypeScript

Avoid JavaScript unless absolutely necessary.

---

# Naming Conventions

Variables

camelCase

Example

userProfile

movieProgress

currentEpisode

---

Functions

camelCase

Examples

getMovie()

updateProgress()

calculateStatistics()

---

Components

PascalCase

Examples

MovieCard

GlassButton

ProgressRing

SearchBar

---

Interfaces

PascalCase

Prefix with I is not required.

Example

User

Movie

GameProgress

---

Types

PascalCase

Examples

MediaType

RatingType

ProgressStatus

---

Enums

PascalCase

Examples

Theme

MediaStatus

Privacy

---

Files

Use PascalCase for React components.

Examples

MovieCard.tsx

DashboardWidget.tsx

GlassButton.tsx

Use camelCase for utilities.

Examples

formatDate.ts

calculateProgress.ts

apiClient.ts

---

Folders

Use lowercase.

Examples

components

features

hooks

services

utils

---

Constants

UPPER_SNAKE_CASE

Examples

MAX_REVIEW_LENGTH

DEFAULT_PAGE_SIZE

API_TIMEOUT

---

Boolean Variables

Prefix with

is

has

can

should

Examples

isLoading

hasCompleted

canEdit

shouldRefresh

---

Function Guidelines

Functions should:

- Perform one responsibility
- Be reusable
- Return predictable values
- Avoid side effects

Avoid extremely long functions.

---

Component Guidelines

Components should:

- Have one responsibility
- Accept typed props
- Be reusable
- Avoid duplicated logic

Split large components into smaller ones.

---

Code Organization

Preferred order

Imports

Constants

Types

Hooks

State

Functions

Effects

Return Statement

Export

---

Import Order

1.

External Libraries

2.

Internal Libraries

3.

Components

4.

Hooks

5.

Services

6.

Utilities

7.

Types

8.

Styles

---

Comments

Write comments only when they improve understanding.

Avoid obvious comments.

Good

// Calculate overall completion using completed objectives

Bad

// Increment i

---

Formatting

Use Prettier.

Do not manually format files differently.

---

TypeScript Rules

Avoid

any

Prefer

unknown

or explicit types.

Always type:

- Props
- API Responses
- Function Parameters
- Return Values

---

Error Handling

Never ignore errors.

Use:

- try/catch
- Proper logging
- User-friendly responses

---

Async Code

Always use

async/await

Avoid nested promise chains.

---

API Calls

Never call fetch directly throughout the application.

Always use the centralized API service.

---

Environment Variables

Never hardcode:

- Secrets
- API Keys
- Database URLs
- Tokens

Use environment variables.

---

Magic Values

Avoid magic numbers and strings.

Store reusable values in constants.

---

Reusable Code

Before creating:

- Component
- Utility
- Hook
- Service

Check whether an equivalent implementation already exists.

---

Code Duplication

Avoid duplicated:

- Components
- Utilities
- Validation
- Business Logic
- API Requests

Extract reusable code whenever possible.

---

Performance

Avoid:

- Unnecessary renders
- Unnecessary API calls
- Large components
- Deep prop drilling

Optimize where appropriate.

---

Git Standards

Commit messages should be meaningful.

Examples

feat: add movie progress tracking

fix: resolve authentication issue

refactor: simplify recommendation service

style: improve dashboard layout

docs: update API specification

---

Linting

All code must pass:

- ESLint
- TypeScript checks
- Formatting checks

No warnings should remain before merging.

---

Testing

Every feature should be tested before completion.

Verify:

- Functionality
- Responsiveness
- Error Handling
- Edge Cases
- Accessibility

---

Definition of Done

A feature is complete when it:

- Follows naming conventions
- Uses TypeScript correctly
- Has no duplicated logic
- Passes linting
- Handles errors properly
- Uses reusable components
- Matches project architecture
- Matches UI design system
- Is responsive
- Is accessible
- Is maintainable
- Is production-ready
