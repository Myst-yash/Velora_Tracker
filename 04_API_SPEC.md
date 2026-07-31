# Velora API Specification

Version: 1.0.0

Status: Draft

---

# Overview

Velora exposes a RESTful API that serves the web application and future mobile applications.

The API is responsible for:

- Authentication
- User Management
- Media Management
- Progress Tracking
- Reviews
- Ratings
- Collections
- Statistics
- Recommendations
- Notifications
- Social Features

All communication uses HTTPS and JSON.

---

# API Standards

Protocol

- HTTPS

Data Format

- JSON

Authentication

- JWT Bearer Token

Versioning

/api/v1/

Example

/api/v1/movies

---

# HTTP Methods

GET

Retrieve data

POST

Create data

PUT

Replace existing data

PATCH

Update partial data

DELETE

Remove data

---

# Response Format

Successful Response

{
    success,
    message,
    data
}

Error Response

{
    success,
    message,
    errors
}

---

# Authentication APIs

POST

/auth/register

POST

/auth/login

POST

/auth/logout

POST

/auth/refresh-token

GET

/auth/me

PATCH

/auth/profile

DELETE

/auth/account

---

# User APIs

GET

/users/:id

GET

/users/:id/statistics

GET

/users/:id/activity

GET

/users/:id/collections

GET

/users/:id/reviews

PATCH

/users/settings

PATCH

/users/profile

---

# Search APIs

GET

/search

Supports

- Movies
- Series
- Anime
- Games

Supports Filters

- Genre
- Release Year
- Platform
- Rating
- Status

Supports Sorting

- Popular
- Latest
- Rating
- Alphabetical

---

# Media APIs

GET

/media

GET

/media/:id

GET

/media/trending

GET

/media/popular

GET

/media/recommended

GET

/media/similar

GET

/media/search

---

# Movie APIs

GET

/movies

GET

/movies/:id

GET

/movies/:id/cast

GET

/movies/:id/reviews

POST

/movies/:id/watch

POST

/movies/:id/watch-later

POST

/movies/:id/favorite

PATCH

/movies/:id/rating

POST

/movies/:id/review

DELETE

/movies/:id/review

---

# Series APIs

GET

/series

GET

/series/:id

GET

/series/:id/seasons

GET

/series/:id/episodes

PATCH

/episodes/:id/progress

POST

/series/:id/complete

---

# Anime APIs

GET

/anime

GET

/anime/:id

GET

/anime/:id/episodes

PATCH

/anime/:id/progress

POST

/anime/:id/complete

---

# Game APIs

GET

/games

GET

/games/:id

PATCH

/games/:id/status

PATCH

/games/:id/progress

PATCH

/games/:id/playtime

PATCH

/games/:id/rating

POST

/games/:id/review

---

# Universal Progress APIs

GET

/progress

GET

/progress/:mediaId

PATCH

/progress/:mediaId

GET

/progress/history

GET

/progress/statistics

---

# Game Progress APIs

PATCH

/games/:id/bosses

PATCH

/games/:id/weapons

PATCH

/games/:id/armor

PATCH

/games/:id/talismans

PATCH

/games/:id/incantations

PATCH

/games/:id/sorceries

PATCH

/games/:id/spirit-ashes

PATCH

/games/:id/npc-quests

PATCH

/games/:id/collectibles

PATCH

/games/:id/completion

The API must support adding new progress categories in future without changing existing endpoints.

---

# Ratings APIs

POST

/ratings

PATCH

/ratings/:id

DELETE

/ratings/:id

GET

/ratings/user

---

# Reviews APIs

GET

/reviews

GET

/reviews/:id

POST

/reviews

PATCH

/reviews/:id

DELETE

/reviews/:id

POST

/reviews/:id/like

POST

/reviews/:id/comment

---

# Collections APIs

GET

/collections

GET

/collections/:id

POST

/collections

PATCH

/collections/:id

DELETE

/collections/:id

POST

/collections/:id/media

DELETE

/collections/:id/media

---

# Statistics APIs

GET

/statistics

GET

/statistics/movies

GET

/statistics/series

GET

/statistics/anime

GET

/statistics/games

GET

/statistics/activity

GET

/statistics/timeline

---

# Recommendation APIs

GET

/recommendations

GET

/recommendations/movies

GET

/recommendations/series

GET

/recommendations/anime

GET

/recommendations/games

---

# Achievement APIs

GET

/achievements

GET

/achievements/user

GET

/achievements/progress

---

# Notification APIs

GET

/notifications

PATCH

/notifications/:id/read

PATCH

/notifications/read-all

DELETE

/notifications/:id

---

# Social APIs

GET

/users/:id/profile

POST

/users/:id/follow

DELETE

/users/:id/follow

GET

/users/:id/followers

GET

/users/:id/following

GET

/users/:id/activity

---

# Timeline APIs

GET

/timeline

GET

/timeline/:year

GET

/timeline/:month

---

# Future APIs

Steam Integration

PlayStation Integration

Xbox Integration

AI Recommendation Engine

Book Tracking

Music Tracking

Podcast Tracking

---

# API Security

Every protected endpoint requires:

- Valid JWT
- Authenticated User
- Authorization Check
- Request Validation
- Rate Limiting

---

# Validation

Every endpoint should validate:

- Required fields
- Data types
- Input length
- Permissions
- Resource existence

---

# Error Codes

200 OK

201 Created

204 No Content

400 Bad Request

401 Unauthorized

403 Forbidden

404 Not Found

409 Conflict

422 Validation Error

429 Too Many Requests

500 Internal Server Error

---

# API Design Principles

- RESTful
- Consistent naming
- Resource-based routing
- Stateless communication
- Secure by default
- Mobile compatible
- Extensible for future features
- Backward compatible whenever possible
