# Velora Architecture

Version: 1.0.0

Status: Draft

---

# Architecture Overview

Velora follows a modern full-stack architecture with a clear separation between frontend, backend, database, authentication, and external services. The architecture is designed to be modular, scalable, maintainable, and reusable while remaining simple enough for learning and future expansion.

---

# High-Level Architecture

                    User
                      │
                      ▼
              Next.js Frontend
                      │
          REST API (HTTPS/JSON)
                      │
                      ▼
             Express.js Backend
                      │
        ┌─────────────┼─────────────┐
        │             │             │
        ▼             ▼             ▼
 PostgreSQL      Supabase Auth   External APIs
   (Prisma)         Storage     TMDB/Jikan/RAWG

---

# Architecture Goals

- Modular codebase
- Clear separation of concerns
- Platform-independent backend
- Reusable frontend components
- Scalable database design
- Easy future expansion
- Mobile-ready architecture

---

# Technology Stack

Frontend

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Zustand
- TanStack Query
- React Hook Form
- Zod

Backend

- Express.js
- TypeScript
- Prisma ORM

Database

- PostgreSQL

Authentication

- Supabase Auth

Storage

- Supabase Storage

Deployment

Frontend
- Vercel

Backend
- Railway

Database
- Supabase PostgreSQL

---

# System Layers

Presentation Layer

Responsible for:

- User Interface
- Routing
- Forms
- Animations
- Responsive Layout
- Theme Management

Business Layer

Responsible for:

- Business Logic
- Validation
- Recommendation Logic
- Progress Calculation
- Statistics
- User Rules

Data Layer

Responsible for:

- Database Operations
- External API Communication
- Caching
- Data Mapping

---

# Frontend Responsibilities

Frontend is responsible for:

- Rendering UI
- Navigation
- Authentication State
- API Calls
- Client Validation
- Animations
- Theme Switching
- Local UI State

Frontend should NEVER:

- Access database directly
- Store sensitive data
- Contain business logic
- Generate recommendations
- Calculate global statistics

---

# Backend Responsibilities

Backend is responsible for:

- Authentication
- Authorization
- Business Logic
- Database Operations
- Recommendation Engine
- Progress Engine
- Statistics
- API Integrations
- Validation
- Security

Backend should NEVER:

- Render UI
- Manage frontend state

---

# Database Responsibilities

Database stores:

- Users
- Profiles
- Media
- Movies
- Series
- Anime
- Games
- Reviews
- Ratings
- Collections
- Progress
- Achievements
- Statistics

Database should never contain duplicated data whenever normalization is appropriate.

---

# Authentication Flow

User

↓

Supabase Authentication

↓

JWT Session

↓

Frontend stores session securely

↓

Frontend calls Express APIs

↓

Express validates token

↓

Database request

↓

Response

---

# Data Flow

User Action

↓

Frontend

↓

API Request

↓

Backend Validation

↓

Business Logic

↓

Database

↓

Response

↓

Frontend Update

---

# External API Flow

User searches media

↓

Frontend

↓

Express API

↓

TMDB / RAWG / Jikan

↓

Normalize Response

↓

Frontend

External APIs should never be called directly from the frontend.

---

# State Management

Global State

- Authentication
- Theme
- User Session

Server State

- Media
- Reviews
- Recommendations
- Dashboard
- Collections

Local State

- Dialogs
- Forms
- Search
- Filters
- UI interactions

---

# Error Handling

Every request should return:

- Success
- Validation Error
- Authentication Error
- Authorization Error
- Not Found
- Server Error

Errors should be standardized across the application.

---

# Security

- JWT Authentication
- Protected Routes
- Password Security
- Input Validation
- SQL Injection Protection
- XSS Protection
- CORS Configuration
- Rate Limiting
- Environment Variables

---

# Universal Media Architecture

Every media type follows one common architecture.

Media

↓

Movie

Series

Anime

Game

Future media types should integrate without changing the existing architecture.

---

# Universal Progress Architecture

Every media item can expose progress.

Examples

Movie

- Watched
- Rewatched

Series

- Episode Progress

Anime

- Episode Progress

Game

- Story
- Bosses
- Weapons
- Collectibles

Future progress systems should plug into the same architecture.

---

# UI Architecture

Reusable Components

↓

Feature Components

↓

Page Components

↓

Layouts

Every UI element should reuse existing components whenever possible.

---

# API Architecture

RESTful API

/api/auth

/api/users

/api/media

/api/movies

/api/series

/api/anime

/api/games

/api/reviews

/api/ratings

/api/collections

/api/progress

/api/recommendations

/api/statistics

/api/notifications

---

# Mobile Expansion

Future Android and iOS applications will communicate with the same REST APIs.

No backend changes should be required for mobile support.

---

# Scalability

Architecture should support:

- Thousands of users
- Additional media types
- Recommendation engine
- AI integration
- Cloud deployment
- Multiple frontend clients

---

# Design Principles

- Separation of concerns
- Reusability
- Modularity
- Simplicity
- Scalability
- Maintainability
- Consistency

Every architectural decision should support long-term growth without sacrificing developer experience.
