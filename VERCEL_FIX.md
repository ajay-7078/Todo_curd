# 🚨 Vercel 500 Error - Fix Guide

## Problem
Your serverless function is crashing with **500 INTERNAL_SERVER_ERROR**.

## Root Causes (Fixed)

✅ **Issue 1: process.exit(1) in Serverless**
- Serverless functions can't call `process.exit()`
- **Fixed:** Removed exit call, now logs error and continues

✅ **Issue 2: app.listen() in Serverless**
- Vercel doesn't use `app.listen()`
- **Fixed:** Now exports app for Vercel, only uses listen() locally

✅ **Issue 3: Missing Environment Variables**
- MONGO_URI not set on Vercel
- **Fixed:** Updated vercel.json to reference env

## 🔧 Fix Checklist - REQUIRED!

### Step 1: Verify .env Locally
```bash
cat .env
```
Check that you have:
- `MONGO_URI=mongodb+srv://...`
- `NODE_ENV=development`

### Step 2: Add Environment Variables to Vercel

1. Go to: **https://vercel.com/your-project/settings/environment-variables**
2. Click **"Add New"**
3. Add this variable:
   - **Name:** `MONGO_URI`
   - **Value:** (Copy from your `.env` file)
   - **Environments:** Select ✓ Production, ✓ Preview, ✓ Development
4. Click **Save**

### Step 3: Redeploy on Vercel

Option A - Via Dashboard:
- Go to Vercel Dashboard
- Click your project
- Click **Redeploy** button
- Wait for build to complete

Option B - Via Git Push:
```bash
git add .
git commit -m "🔧 Fix: Vercel serverless configuration"
git push origin main
```

### Step 4: Test Deployment
```bash
# Check logs for errors
https://vercel.com/your-project/settings/logs

# Or test the live URL
https://your-project-name.vercel.app/
```

## 📋 What Changed

| File | Change |
|------|--------|
| `app.js` | Removed `process.exit(1)`, export app, conditional listen |
| `vercel.json` | Added environment variables config |
| `.env.example` | Added Vercel setup instructions |

## ✅ Expected Result

After fixing:
- ✓ No more 500 errors
- ✓ Serverless functions work correctly
- ✓ Local development still works (`npm run dev`)
- ✓ Production on Vercel works

## 🚀 Quick Commands

```bash
# Test locally first
npm run dev
# Should work on http://localhost:3000

# Commit changes
git add .
git commit -m "Fix Vercel 500 error - serverless config"
git push origin main

# Monitor Vercel logs
# https://vercel.com/your-project/deployments
```

## 🆘 Still Having Issues?

Check these:

1. **MongoDB Connection:**
   - Is your IP whitelisted in MongoDB Atlas?
   - Go to: MongoDB Atlas → Network Access → Add your IP
   - Or use: `0.0.0.0/0` (allow all - not recommended for production)

2. **Environment Variables:**
   - Verify `MONGO_URI` is set in Vercel dashboard
   - Check that it's the exact same as your local `.env`

3. **Vercel Logs:**
   - Check: https://vercel.com/your-project/settings/logs
   - Look for the actual error message

4. **Rebuild:**
   - Sometimes just clicking "Redeploy" on Vercel helps
   - It forces a fresh build and restart

## 📚 Resources

- [Vercel Node.js Runtime Docs](https://vercel.com/docs/functions/nodejs)
- [Vercel Environment Variables](https://vercel.com/docs/projects/environment-variables)
- [MongoDB Atlas Whitelist IP](https://docs.mongodb.com/manual/reference/command/nav-administration/#connection-string-options)
- [Common Vercel Errors](https://vercel.com/docs/errors)

---

**Let me know if you need help with any step!** 🎉
