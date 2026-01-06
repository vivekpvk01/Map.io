# DEPRECATED: Frontend Data Files

**⚠️ WARNING: These files are deprecated and should NOT be used in production code.**

This directory contains legacy hardcoded roadmap data that was used during development.

## Migration Status

All roadmap data has been migrated to the backend MongoDB database.

## Current Usage

- **DO NOT** import from these files in production code
- These files are kept only as reference for seed scripts
- All roadmap data should be fetched from `/api/roadmaps` endpoints

## Backend API Endpoints

- `GET /api/roadmaps` - List all roadmaps
- `GET /api/roadmaps/:slug` - Get roadmap by slug
- `GET /api/roadmaps/:slug/nodes` - Get nodes for a roadmap
- `GET /api/roadmaps/:slug/nodes/:nodeId/resources` - Get resources for a node

## Removal Plan

These files will be removed in a future cleanup after confirming all data has been seeded to the database.

