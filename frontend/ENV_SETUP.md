# Environment Variables Setup Guide

## ⚠️ CRITICAL: Security First

**NEVER commit `.env.local` or any file containing real secrets to Git.**

---

## Quick Start

1. **Copy the example file:**
   ```bash
   cp .env.example .env.local
   ```

2. **Fill in your actual values in `.env.local`**

3. **Verify `.env.local` is in `.gitignore`** (already configured)

---

## Required Environment Variables

### 1. `MONGODB_URI` (Required)
- **Type:** Server-side only (NOT prefixed with `NEXT_PUBLIC_`)
- **Purpose:** MongoDB Atlas connection string
- **Format:** `mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>`
- **Where to get it:**
  - MongoDB Atlas Dashboard → Clusters → Connect → Connect your application
  - Copy the connection string
  - Replace `<password>` with your database user password
  - Replace `<database>` with your database name (e.g., `mapio`)

**Example:**
```
MONGODB_URI=mongodb+srv://admin:MySecurePassword123@cluster0.abc123.mongodb.net/mapio?retryWrites=true&w=majority
```

**Used in:**
- `lib/db.ts` - Mongoose connection
- `lib/mongodb.ts` - Native MongoDB driver
- `scripts/seed-roadmaps.ts` - Seed script

---

### 2. `JWT_SECRET` (Required)
- **Type:** Server-side only (NOT prefixed with `NEXT_PUBLIC_`)
- **Purpose:** Secret key for signing and verifying JWT tokens
- **Security:** Must be a strong, random string (minimum 32 characters)

**Generate a secure secret:**
```bash
# Using OpenSSL
openssl rand -base64 32

# Using Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

**Example:**
```
JWT_SECRET=K8jP2mN9qR5sT7vW0xY3zA6bC9dE1fG4hI7jK0lM3nO6pQ9rS2tU5vW8xY1z
```

**Used in:**
- `lib/jwt.ts` - JWT signing and verification
- All authentication routes

---

### 3. `NODE_ENV` (Optional, but recommended)
- **Type:** Server-side only
- **Purpose:** Determines environment mode
- **Values:** `development` | `production`
- **Default:** `development` (if not set)

**Example:**
```
NODE_ENV=development
```

**Used in:**
- `lib/mongodb.ts` - Connection pooling strategy
- `app/api/auth/*/route.ts` - Cookie security settings (`secure` flag)

**Note:** In production, cookies use `secure: true` (HTTPS only)

---

### 4. `NEXT_PUBLIC_BASE_URL` (Optional)
- **Type:** Client-side accessible (prefixed with `NEXT_PUBLIC_`)
- **Purpose:** Base URL for API calls in server-side rendering
- **Default:** `http://localhost:3000` (if not set)

**Local Development:**
```
# Leave empty or unset (defaults to localhost:3000)
NEXT_PUBLIC_BASE_URL=
```

**Production (Vercel):**
```
NEXT_PUBLIC_BASE_URL=https://your-domain.vercel.app
```

**Used in:**
- `app/roadmaps/[slug]/page.tsx` - Server-side API calls

**Note:** This is safe to expose to the client as it's just a URL.

---

## File Structure

```
frontend/
├── .env.example          # Template (safe to commit)
├── .env.local            # Your local secrets (NEVER commit)
└── .gitignore            # Already configured to ignore .env*
```

---

## Local Development Setup

### Step 1: Create `.env.local`

Create a file named `.env.local` in the `frontend/` directory:

```bash
cd frontend
touch .env.local
```

### Step 2: Add Required Variables

Open `.env.local` and add:

```env
# MongoDB Connection String
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/mapio

# JWT Secret (generate a secure random string)
JWT_SECRET=your-generated-secret-here

# Node Environment
NODE_ENV=development

# Optional: Base URL (leave empty for local)
NEXT_PUBLIC_BASE_URL=
```

### Step 3: Verify Git Ignore

Confirm `.env.local` is ignored:

```bash
git status
# .env.local should NOT appear in the list
```

---

## Production Setup (Vercel)

### Step 1: Add Environment Variables in Vercel Dashboard

1. Go to your Vercel project
2. Settings → Environment Variables
3. Add each variable:

| Variable | Value | Environment |
|----------|-------|-------------|
| `MONGODB_URI` | Your MongoDB connection string | Production, Preview, Development |
| `JWT_SECRET` | Your secure JWT secret | Production, Preview, Development |
| `NODE_ENV` | `production` | Production only |
| `NEXT_PUBLIC_BASE_URL` | Your Vercel URL | Production, Preview |

### Step 2: Redeploy

After adding variables, redeploy your application.

---

## Validation Checklist

After setup, verify:

- [ ] `.env.local` exists in `frontend/` directory
- [ ] `.env.local` contains `MONGODB_URI` with real value
- [ ] `.env.local` contains `JWT_SECRET` with secure random string
- [ ] `.env.local` is NOT tracked by Git (`git status` shows no `.env.local`)
- [ ] App starts without errors: `pnpm dev`
- [ ] MongoDB connection works (check console logs)
- [ ] Auth routes function (signup/signin work)
- [ ] No hardcoded secrets in codebase

---

## Security Best Practices

### ✅ DO:
- Use strong, random secrets (32+ characters)
- Rotate secrets periodically
- Use different secrets for development and production
- Store production secrets in Vercel environment variables
- Review `.gitignore` regularly

### ❌ DON'T:
- Commit `.env.local` to Git
- Share secrets in chat/email
- Use weak secrets (e.g., "password123")
- Hardcode secrets in source code
- Expose server-side secrets to client (`NEXT_PUBLIC_` prefix)

---

## Troubleshooting

### Error: "MONGODB_URI is not set"
- **Solution:** Ensure `.env.local` exists and contains `MONGODB_URI`
- **Check:** Restart dev server after creating `.env.local`

### Error: "JWT_SECRET must be set"
- **Solution:** Add `JWT_SECRET` to `.env.local`
- **Check:** Value is not empty

### MongoDB Connection Fails
- **Check:** Connection string format is correct
- **Check:** IP whitelist in MongoDB Atlas includes your IP (or `0.0.0.0/0` for development)
- **Check:** Database user has correct permissions

### Cookies Not Working in Production
- **Check:** `NODE_ENV=production` is set
- **Check:** App is served over HTTPS (required for secure cookies)

---

## Environment Variable Reference

| Variable | Type | Required | Client Accessible | Used In |
|----------|------|----------|-------------------|---------|
| `MONGODB_URI` | Server | ✅ Yes | ❌ No | `lib/db.ts`, `lib/mongodb.ts`, `scripts/seed-roadmaps.ts` |
| `JWT_SECRET` | Server | ✅ Yes | ❌ No | `lib/jwt.ts` |
| `NODE_ENV` | Server | ⚠️ Recommended | ❌ No | `lib/mongodb.ts`, `app/api/auth/*/route.ts` |
| `NEXT_PUBLIC_BASE_URL` | Client | ❌ Optional | ✅ Yes | `app/roadmaps/[slug]/page.tsx` |

---

## Next Steps

1. Create `.env.local` with your actual values
2. Test locally: `pnpm dev`
3. Verify MongoDB connection
4. Test authentication flow
5. Deploy to Vercel with environment variables configured

---

**Last Updated:** 2024
**Maintained By:** DevOps Team

