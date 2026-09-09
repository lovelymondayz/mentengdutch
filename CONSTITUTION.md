# CONSTITUTION.md — Mentengdutch (Jakarta Munch)

> This project adheres to the [Hermes Engineering Constitution](/root/hermes/CONSTITUTION.md) (v1.0, ratified 2026-06-10).

## Project-Specific Exceptions

**Static Site Justification:** This is a restaurant showcase website (Jakarta Munch) that primarily serves static content. A full Go + PostgreSQL backend is not required for the core use case. The project uses React + Tailwind CSS for the frontend, served via Nginx.

The constitution states: "Only the user can override this constitution. Agents cannot." This exception is documented for user review.

## Project Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18 + TypeScript + Tailwind CSS |
| Server | Nginx (static serving) |
| Container | Docker + Docker Compose |

## Design System

Per-project accent: `#F59E0B` (Amber) — Warm, approachable, food-friendly.
