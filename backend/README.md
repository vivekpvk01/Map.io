# Map.io Backend API

Express + TypeScript backend for Map.io

## Setup

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Create `.env.local` file:**
   ```bash
   cp .env.example .env.local
   ```

3. **Fill in environment variables in `.env.local`:**
   ```env
   MONGODB_URI=your-mongodb-connection-string
   JWT_SECRET=your-jwt-secret
   NODE_ENV=development
   FRONTEND_URL=http://localhost:3000
   PORT=5000
   ```

4. **Run development server:**
   ```bash
   pnpm dev
   ```

5. **Build for production:**
   ```bash
   pnpm build
   pnpm start
   ```

## API Endpoints

### Auth
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/signin` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user (protected)

### Roadmaps
- `GET /api/roadmaps` - List all roadmaps
- `GET /api/roadmaps/:slug` - Get roadmap by slug
- `GET /api/roadmaps/:slug/nodes` - Get nodes for roadmap
- `GET /api/roadmaps/:slug/nodes/:nodeId/resources` - Get resources for node

### Progress
- `GET /api/progress/:roadmapId` - Get user progress (protected)
- `POST /api/progress/:roadmapId` - Update user progress (protected)

### Admin
- `POST /api/admin/roadmaps` - Create roadmap (admin only)
- `POST /api/admin/nodes` - Create node (admin only)
- `POST /api/admin/resources` - Add resource (admin only)

## Project Structure

```
backend/
├── src/
│   ├── config/        # Configuration (env, db)
│   ├── models/         # Mongoose models
│   ├── modules/        # Feature modules
│   │   ├── auth/
│   │   ├── roadmaps/
│   │   ├── progress/
│   │   └── admin/
│   ├── middlewares/    # Express middlewares
│   ├── utils/          # Utilities (jwt, validators)
│   ├── app.ts          # Express app setup
│   ├── server.ts       # Server entry point
│   └── routes.ts       # Route aggregation
├── dist/               # Compiled output
└── package.json
```

