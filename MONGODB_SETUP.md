# 🚨 500 Error - MongoDB URI Missing

## Problem
The `.env` file was missing, causing **MONGO_URI to be undefined**.

## Solution

### Step 1: Get Your MongoDB Connection String

1. Go to **[MongoDB Atlas](https://www.mongodb.com/cloud/atlas)**
2. Sign in to your account (or create one)
3. Click **"Connect"** on your cluster
4. Choose **"Drivers"** (or "Connect your application")
5. Copy the connection string (looks like this):
   ```
   mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/myapp?retryWrites=true&w=majority
   ```

### Step 2: Update Your `.env` File

Open `.env` in your editor and replace:

```env
# BEFORE (incorrect)
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/todo_app?retryWrites=true&w=majority

# AFTER (with your real credentials)
MONGO_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/todo_app?retryWrites=true&w=majority
```

**Example with real values:**
```env
MONGO_URI=mongodb+srv://ajay:MyPassword123@cluster0.a1b2c3.mongodb.net/todo_app?retryWrites=true&w=majority
PORT=3000
SESSION_SECRET=my-super-secret-key
NODE_ENV=development
```

### Step 3: Whitelist Your IP on MongoDB

1. Go to MongoDB Atlas Dashboard
2. Click **"Network Access"** (left sidebar)
3. Click **"Add IP Address"**
4. Add your IP (or use `0.0.0.0/0` for all IPs - not recommended for production)
5. Click **"Confirm"**

### Step 4: Restart Your Server

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

## ✅ Expected Result

After configuration, you should see:
```
🚀 Server Running on http://localhost:3000
✅ MongoDB Connected
```

## 🔍 Verify Connection

1. Open browser: http://localhost:3000
2. Should redirect to login page (not 500 error)
3. Create account and login
4. Add a task to test

## 🆘 Still Getting 500 Error?

### Check These:

**1. MongoDB URI Format**
- Must start with `mongodb+srv://`
- Must include username and password
- Must include `?retryWrites=true&w=majority`

**2. Special Characters in Password**
If your password has special characters (e.g., `@`, `#`, `$`, `%`), URL encode them:
- `@` → `%40`
- `#` → `%23`
- `$` → `%24`
- `%` → `%25`

**Example:**
```
Password: my@pass#word
Encoded: my%40pass%23word
Connection: mongodb+srv://user:my%40pass%23word@...
```

**3. MongoDB Atlas Whitelist**
- Is your IP whitelisted?
- Try using `0.0.0.0/0` temporarily for testing

**4. Network Issues**
- Check your internet connection
- Try from a different network
- MongoDB Atlas might be blocking your ISP

## 📝 Sample `.env` File

```env
# MongoDB Atlas Connection String (REQUIRED)
MONGO_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/todoapp?retryWrites=true&w=majority

# Server Port (optional)
PORT=3000

# Session Secret (optional)
SESSION_SECRET=random-secret-key-here

# Environment Mode
NODE_ENV=development
```

## 🚀 Once Working Locally

To deploy on Vercel:
1. Add `MONGO_URI` to Vercel Environment Variables
2. Push code to GitHub
3. Vercel auto-deploys
4. Should work on production!

---

**Need help?** Check MongoDB Atlas docs: https://docs.mongodb.com/manual/

