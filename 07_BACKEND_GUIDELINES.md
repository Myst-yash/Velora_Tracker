# Velora Backend Guidelines

Version: 1.0.0

Status: Draft

---

# Overview

This document defines the backend engineering standards for Velora.

The backend is responsible for business logic, authentication, authorization, database communication, integrations with external services, and providing secure, scalable APIs for the frontend and future mobile applications.

---

# Core Principles

- Security First
- Modular Architecture
- Separation of Concerns
- Reusability
- Scalability
- Maintainability
- Type Safety
- Performance

---

# Technology Stack

Runtime

- Node.js

Framework

- Express.js

Language

- TypeScript

ORM

- Prisma

Database

- PostgreSQL

Authentication

- Supabase Auth

Validation

- Zod

---

# Backend Responsibilities

The backend is responsible for:

- Authentication
- Authorization
- User Management
- Business Logic
- Database Operations
- Progress Tracking
- Recommendation Engine
- Statistics
- External API Integration
- Notifications
- Security

The backend should never contain frontend-specific logic.

---

# Project Structure

Organize the backend by responsibility.

Examples

- routes
- controllers
- services
- repositories
- middleware
- validators
- prisma
- config
- utils
- types
- constants

Every module should have a single responsibility.

---

# Request Flow

Client Request

↓

Route

↓

Middleware

↓

Validation

↓

Controller

↓

Service

↓

Repository / Prisma

↓

Database

↓

Response

Business logic belongs only in the Service layer.

---

# Controllers

Controllers should:

- Receive requests
- Validate input
- Call services
- Return responses

Controllers should not contain business logic.

---

# Services

Services should contain:

- Business rules
- Calculations
- Recommendation logic
- Progress updates
- Statistics generation

Services should remain reusable.

---

# Repository Layer

Repository layer is responsible for:

- Database queries
- Prisma operations
- Query optimization

Repositories should not contain business logic.

---

# Validation

Every request must be validated.

Validate:

- Required fields
- Data types
- Length
- Enums
- UUIDs
- Query parameters
- Request body

Never trust client input.

---

# Authentication

Authentication is handled through Supabase Auth.

Every protected request must:

- Validate JWT
- Identify the user
- Verify permissions

Unauthenticated requests should return appropriate error responses.

---

# Authorization

Users should only access or modify resources they own unless explicitly allowed.

Authorization checks are required for:

- Reviews
- Ratings
- Collections
- Progress
- Profile
- Settings

---

# Database Access

Use Prisma for all database communication.

Never write raw SQL unless absolutely necessary for performance.

Prefer Prisma relations and transactions.

---

# Transactions

Use database transactions whenever multiple related operations must succeed together.

Examples

- Completing media
- Unlocking achievements
- Updating statistics
- Creating reviews and activity logs

---

# Error Handling

Use centralized error handling.

Return standardized error responses.

Support:

- Validation Error
- Authentication Error
- Authorization Error
- Not Found
- Conflict
- Internal Server Error

Never expose internal implementation details.

---

# Logging

Log:

- Server startup
- Errors
- Warnings
- Failed authentication
- External API failures

Avoid logging sensitive user information.

---

# External APIs

All external services should be isolated.

Examples

- TMDB
- Jikan
- RAWG

Normalize responses before returning them to the frontend.

Never expose third-party API structures directly.

---

# Recommendation Engine

Recommendation logic belongs only in backend services.

It should use:

- User history
- Ratings
- Reviews
- Genres
- Progress
- Trending media

Frontend should only receive processed recommendations.

---

# Universal Progress Engine

The backend manages:

- Movie Progress
- Episode Progress
- Anime Progress
- Game Progress
- Completion Percentage

All calculations happen server-side.

---

# Statistics Engine

Statistics should be generated on the backend.

Examples

- Movies Watched
- Games Completed
- Completion Rate
- Favorite Genres
- Activity Timeline

---

# Notifications

Notification generation happens in backend services.

Examples

- Achievement Unlocked
- New Episode Released
- Recommendation Available

---

# Security

Implement:

- JWT Validation
- Input Validation
- Rate Limiting
- CORS
- Environment Variables
- Secure Headers
- SQL Injection Protection
- XSS Protection

Never expose secrets.

---

# Performance

Optimize:

- Database Queries
- Pagination
- Index Usage
- External API Calls
- Response Size

Avoid unnecessary database requests.

---

# API Standards

Every endpoint should:

- Validate input
- Return consistent responses
- Return proper status codes
- Handle exceptions
- Be fully documented

---

# Code Quality

Backend code should be:

- Modular
- Readable
- Strongly Typed
- Testable
- Reusable

Avoid duplicated logic.

---

# Definition of Done

A backend feature is complete when it:

- Passes validation
- Handles errors correctly
- Is secured
- Uses Prisma properly
- Is fully type-safe
- Includes authorization checks
- Returns standardized responses
- Is optimized for performance
- Follows the project architecture
- Passes all tests
