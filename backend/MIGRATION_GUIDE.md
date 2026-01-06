# Backend Migration Guide

## Overview

All backend logic has been migrated from `frontend/app/api/*` to a standalone Express backend in `backend/`.

## Setup Instructions

### 1. Backend Setup

```bash
cd backend
pnpm install
cp .env.example .env.local
# Edit .env.local with your actual values
pnpm dev
```

### 2. Frontend Setup

Add to `frontend/.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### 3. Run Both Servers

**Terminal 1 (Backend):**
```bash
cd backend
pnpm dev
```

**Terminal 2 (Frontend):**
```bash
cd frontend
pnpm dev
```

## API Endpoints

All endpoints are now at `http://localhost:5000/api/`:

- `/api/auth/signup` - POST
- `/api/auth/signin` - POST
- `/api/auth/logout` - POST
- `/api/auth/me` - GET (protected)
- `/api/roadmaps` - GET
- `/api/roadmaps/:slug` - GET
- `/api/roadmaps/:slug/nodes` - GET
- `/api/roadmaps/:slug/nodes/:nodeId/resources` - GET
- `/api/roadmaps/search?q=query` - GET
- `/api/progress/:roadmapId` - GET/POST (protected)
- `/api/admin/*` - POST (admin only)

## Frontend Changes

- All API calls now use `NEXT_PUBLIC_API_URL` environment variable
- Next.js rewrites configured to proxy `/api/*` to backend
- Auth provider updated to use backend endpoints
- Progress tracking updated to use backend endpoints

## What Was Migrated

✅ Auth routes (signup, signin, logout, me)
✅ Roadmap routes (list, get by slug, nodes, resources)
✅ Progress routes (get, update)
✅ Admin routes (create roadmap, node, resource)
✅ Search functionality
✅ Models (User, Roadmap, RoadmapNode, UserProgress)
✅ Validators (Zod schemas)
✅ JWT utilities
✅ Database connection

## What Stays in Frontend

- `app/api/genai/route.ts` - Mock AI generation (can be migrated later)
- UI components
- Pages
- Client-side logic

## Production Deployment

### Backend
- Deploy to any Node.js hosting (Railway, Render, AWS, etc.)
- Set environment variables
- Update `FRONTEND_URL` to production frontend URL

### Frontend
- Deploy to Vercel
- Set `NEXT_PUBLIC_API_URL` to production backend URL
- Update CORS in backend to allow frontend domain

