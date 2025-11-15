# Network Error Troubleshooting Guide

## Common Network Errors and Solutions

### 1. ERR_NETWORK or "Cannot connect to server"
**Cause:** Frontend can't reach the backend server
**Solution:**
- Ensure backend server is running on port 4000
- Check if `http://localhost:4000` is accessible in browser
- Verify backend .env file has correct MongoDB URI

### 2. CORS Error
**Cause:** Cross-Origin Resource Sharing blocked
**Solution:**
- Backend now includes proper CORS configuration for ports 5173, 5174, 3000
- Restart backend server after changes

### 3. MongoDB Connection Error
**Cause:** Cannot connect to MongoDB database
**Solution:**
- Check MongoDB connection string in backend/.env
- Ensure MongoDB cluster is running and accessible
- Verify network permissions for MongoDB Atlas

### 4. 404 API Endpoints
**Cause:** API routes not found
**Solution:**
- Verify backend routes are properly registered
- Check URL paths in frontend API calls

## Step-by-Step Debugging

### Step 1: Test Backend Connectivity
Open browser and visit:
- `http://localhost:4000` - Should show "API Working"
- `http://localhost:4000/health` - Should show server status

### Step 2: Check Backend Console
Look for these messages:
- ✅ "Server started on PORT : 4000"
- ✅ "DB connected"
- ✅ "Cloudinary connected successfully"
- ❌ Any error messages

### Step 3: Check Frontend Console
Open browser DevTools (F12) and look for:
- Network tab: Failed requests to localhost:4000
- Console tab: JavaScript errors
- Red error messages

### Step 4: Test API Endpoints Manually
Use tools like Postman or browser to test:
- GET `http://localhost:4000/api/product/list`
- POST `http://localhost:4000/api/user/login`

## Environment Variables Check

### Backend (.env)
```
MONGODB_URI = "mongodb+srv://..."
CLOUDINARY_API_KEY = "..."
CLOUDINARY_SECRET_KEY = "..."
CLOUDINARY_NAME = "..."
JWT_SECRET = "..."
ADMIN_EMAIL = "..."
ADMIN_PASSWORD = "..."
```

### Frontend (.env)
```
VITE_BACKEND_URL = http://localhost:4000
```

### Admin (.env)
```
VITE_BACKEND_URL = http://localhost:4000
```

## Port Configuration
- Backend: 4000
- Frontend: 5173 (Vite default)
- Admin: 5174 (Vite default + 1)

## Quick Fix Commands

### Kill processes on ports (if port already in use)
```bash
# Windows
netstat -ano | findstr :4000
taskkill /PID <PID_NUMBER> /F

# Kill all Node processes
taskkill /IM node.exe /F
```

### Restart servers in correct order
1. Start Backend: `cd backend && npm run server`
2. Start Frontend: `cd frontend && npm run dev`
3. Start Admin: `cd admin && npm run dev`