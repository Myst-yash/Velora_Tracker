# Velora Database Specification

Version: 1.0.0

Status: Draft

---

# Overview

Velora uses PostgreSQL as its primary relational database with Prisma ORM.

The database is designed to be:

- Normalized
- Scalable
- Extensible
- Type-safe
- Easy to maintain

The schema must support current features while allowing future expansion without major redesigns.

---

# Database Design Principles

- UUIDs for primary keys
- Foreign keys for relationships
- Soft delete where appropriate
- Timestamps on all major entities
- Avoid duplicate data
- Maintain referential integrity
- Support future media types

---

# Core Entities

The database is divided into the following domains:

Authentication

- User
- Session

Profiles

- UserProfile
- UserSettings

Media

- Media
- Movie
- Series
- Anime
- Game

Tracking

- WatchHistory
- EpisodeProgress
- GameProgress
- UniversalProgress

Social

- Review
- Rating
- Collection
- CollectionItem
- Follow

Analytics

- Statistics
- Activity
- Timeline

Recommendations

- Recommendation
- RecommendationHistory

Notifications

- Notification

Achievements

- Achievement
- UserAchievement

---

# User Domain

User

Stores:

- UUID
- Authentication ID
- Username
- Email
- Avatar
- Created Date
- Updated Date

Relationships

- One Profile
- One Settings
- Many Reviews
- Many Ratings
- Many Collections
- Many Progress Records
- Many Notifications
- Many Activities

---

# User Profile

Stores

- Display Name
- Bio
- Banner
- Country
- Favorite Genres
- Favorite Platforms

---

# User Settings

Stores

- Theme
- Language
- Privacy
- Notification Preferences

---

# Media Domain

Media is the parent entity for every supported media type.

Every media item contains:

- UUID
- Title
- Description
- Poster
- Backdrop
- Genres
- Release Date
- Average Rating
- Popularity
- Status
- Metadata

Children

- Movie
- Series
- Anime
- Game

Future

- Book
- Manga
- Music

---

# Movie

Stores

- Runtime
- Budget
- Revenue
- Director
- Writers
- Cast

---

# Series

Stores

- Seasons
- Episode Count
- Status

Relationships

Series

↓

Season

↓

Episode

---

# Season

Stores

- Season Number
- Name
- Poster

Relationship

One Season

↓

Many Episodes

---

# Episode

Stores

- Episode Number
- Title
- Description
- Runtime
- Air Date

---

# Anime

Stores

- Episode Count
- OVA Count
- Specials
- Movies

---

# Game

Stores

- Developer
- Publisher
- Platforms
- Genres
- Release Date
- DLC
- Expansions

---

# Universal Progress

Stores progress for every supported media type.

Fields

- User
- Media
- Status
- Completion Percentage
- Started Date
- Completed Date
- Last Updated

Supports

Movies

Series

Anime

Games

Future Media

---

# Movie Progress

Stores

- Watched
- Watch Date
- Rewatch Count
- Favorite

---

# Episode Progress

Stores

- Episode
- Watched
- Watch Date

---

# Game Progress

Stores

- Story Progress
- Hours Played
- Completion Percentage

Supports detailed progress modules.

---

# Game Detail Progress

Stores progress for:

- Bosses
- Optional Bosses
- Weapons
- Armor
- Shields
- Talismans
- Sorceries
- Incantations
- Ashes of War
- Spirit Ashes
- NPC Quests
- Great Runes
- Crystal Tears
- Sacred Tears
- Golden Seeds
- Map Fragments
- Bell Bearings
- Paintings
- Gestures
- Collectibles

Architecture must allow adding new categories without schema redesign.

---

# Reviews

Stores

- User
- Media
- Rating
- Title
- Content
- Spoiler
- Created Date

Relationships

Review

↓

Comments

↓

Likes

---

# Ratings

Stores

- User
- Media
- Score

Only one rating per user per media.

---

# Collections

Stores

- Name
- Description
- Visibility
- Owner

Relationship

Collection

↓

Collection Items

---

# Collection Items

Stores

- Media
- Position
- Added Date

---

# Activity

Stores

- User
- Action
- Media
- Timestamp

Examples

Watched Movie

Completed Series

Finished Game

Created Review

Unlocked Achievement

---

# Statistics

Stores aggregated statistics.

Examples

- Movies Watched
- Games Completed
- Hours Played
- Average Rating
- Favorite Genre
- Completion Percentage

---

# Achievements

Stores

- Name
- Description
- Icon
- XP
- Badge

---

# User Achievement

Stores

- User
- Achievement
- Unlock Date

---

# Recommendation

Stores generated recommendations.

Fields

- User
- Media
- Reason
- Generated Date

---

# Notification

Stores

- User
- Type
- Title
- Description
- Read Status
- Created Date

---

# Follow

Stores

Follower

↓

Following

---

# Timeline

Stores chronological user events.

Examples

- Movie Watched
- Episode Completed
- Game Finished
- Review Created
- Achievement Earned

---

# Relationships Overview

User

↓

Profile

↓

Settings

↓

Progress

↓

Ratings

↓

Reviews

↓

Collections

↓

Statistics

↓

Notifications

↓

Timeline

Media

↓

Movie

Series

Anime

Game

Series

↓

Season

↓

Episode

Collections

↓

Collection Items

Achievements

↓

User Achievements

---

# Indexing Strategy

Indexes should exist for:

- User ID
- Media ID
- Username
- Email
- Ratings
- Reviews
- Progress
- Collections
- Timeline
- Search Fields

---

# Data Integrity Rules

- UUID primary keys
- Foreign key constraints
- Cascade delete only where appropriate
- Prevent duplicate ratings
- Prevent duplicate follows
- Maintain media relationships
- Preserve historical activity

---

# Future Expansion

Database should support future entities without breaking existing relationships.

Potential additions:

- Books
- Manga
- Comics
- Podcasts
- Music
- Audiobooks
- AI Recommendation Data
- Steam Integration
- PlayStation Integration
- Xbox Integration

No redesign should be required for future media support.
