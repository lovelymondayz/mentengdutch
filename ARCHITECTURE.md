# Mentengdutch — Architecture

## System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        Cloudflare Edge                          │
│                  mentengdutch.arjism.com (HTTPS)                │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Cloudflare Tunnel (cf-tunnel)                │
│              http://192.168.88.101:3002 (plain HTTP)            │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                        Nginx Reverse Proxy                      │
│                    :3002 → :80 (frontend)                       │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                     Node.js + Vite Frontend                     │
│                     :3002 (internal)                            │
│                                                                 │
│  - Static HTML/CSS/JS                                          │
│  - Jakarta Munch Food Delivery UI                              │
│  - Responsive Design                                           │
└─────────────────────────────────────────────────────────────────┘
```

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Frontend | Node.js + Vite | Vite 5 |
| Styling | CSS | - |
| Deployment | Docker Compose | v3.8 |
| Reverse Proxy | Nginx | - |
| Tunnel | Cloudflare Tunnel | - |

## Key Design Decisions

### 1. Static Frontend
- Pure HTML/CSS/JS frontend with Vite build tooling
- No backend API required for core functionality
- Fast load times, minimal infrastructure

### 2. Food Delivery Focus
- Jakarta-specific food delivery interface
- Mobile-first responsive design
- Optimized for Indonesian market

### 3. Simple Deployment
- Single container deployment
- No database dependency
- Minimal resource usage

## Ports

| Service | External | Internal |
|---------|----------|----------|
| Frontend | `:3002` | `:80` |
