# 🎓 SQL Learning Platform

A full-stack interactive SQL learning platform where users can practice SQL queries, complete assignments, and get AI-powered hints. Built with React, Node.js, PostgreSQL, and MongoDB.

## 🌐 Live Demo

- **Frontend:** [https://assignment-sql-platform-frontend.onrender.com](https://assignment-sql-platform-frontend.onrender.com/)
- **Backend API:** [https://assignment-sql-platform-frontend.onrender.com](https://assignment-sql-platform-frontend.onrender.com)

> **Note:** Services are hosted on Render's free tier and may take 30-60 seconds to wake up on first request.

## ✨ Features

- 🔐 **User Authentication** - JWT-based secure login and registration
- 📝 **SQL Assignments** - Practice SQL queries with real-time validation
- 💡 **AI-Powered Hints** - Get intelligent hints when stuck on problems
- ⚡ **Live Query Execution** - Run SQL queries against PostgreSQL database
- 📊 **Progress Tracking** - Monitor your learning progress
- 🎨 **Modern UI** - Clean, responsive interface built with React

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client
- **ESLint** - Code linting

### Backend
- **Node.js** - Runtime environment
- **Express 5** - Web framework
- **PostgreSQL** - Primary database for SQL queries
- **MongoDB** - User data and assignments storage
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
Assignment_SQL_platform/
├── frontend/                 # React application
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/           # Page components
│   │   ├── services/        # API services
│   │   └── App.jsx          # Main app component
│   ├── public/              # Static assets
│   ├── package.json
│   └── vite.config.js
│
├── backend/                  # Express API
│   ├── config/              # Database configurations
│   ├── controllers/         # Route controllers
│   ├── models/              # Database models
│   ├── routes/              # API routes
│   │   ├── authRoutes.js
│   │   ├── assignmentRoutes.js
│   │   ├── queryRoutes.js
│   │   └── hintRoutes.js
│   ├── services/            # Business logic
│   ├── middleware/          # Custom middleware
│   ├── server.js            # Entry point
│   └── package.json
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- PostgreSQL (v12 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Local Development Setup

#### 1. Clone the Repository

```bash
git clone <repository-url>
cd Assignment_SQL_platform
```

#### 2. Backend Setup

```bash
cd backend
npm install
```

Create `.env` file in `backend/` directory:

```env
# Server Configuration
PORT=9000
NODE_ENV=development

# Database URLs
DATABASE_URL=postgresql://username:password@localhost:5432/sql_platform
MONGODB_URI=mongodb://localhost:27017/sql_platform

# Authentication
JWT_SECRET=your_super_secret_jwt_key_at_least_32_characters_long

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173
```

Start the backend server:

```bash
npm run dev    # Development mode with nodemon
# or
npm start      # Production mode
```

Backend will run on `http://localhost:9000`

#### 3. Frontend Setup

```bash
cd frontend
npm install
```

Create `.env` file in `frontend/` directory:

```env
VITE_API_URL=http://localhost:9000
```

Start the frontend:

```bash
npm run dev
```

Frontend will run on `http://localhost:5173`

## 🌐 Deployment on Render

### Backend Deployment

1. **Create PostgreSQL Database:**
   - Go to [Render Dashboard](https://dashboard.render.com/)
   - Click **New +** → **PostgreSQL**
   - Name: `sql-platform-db`
   - Region: Choose closest to you
   - Copy the **Internal Database URL**

2. **Create MongoDB Database:**
   - Use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) free tier
   - Create cluster and get connection string

3. **Deploy Backend Service:**
   - Click **New +** → **Web Service**
   - Connect your repository
   - Configure:
     - **Name:** `assignment-sql-platform-backend`
     - **Root Directory:** `backend`
     - **Environment:** `Node`
     - **Build Command:** `npm install`
     - **Start Command:** `npm start`
     - **Instance Type:** Free
   
   - **Environment Variables:**
     ```
     PORT=10000
     NODE_ENV=production
     DATABASE_URL=<your_render_postgres_internal_url>
     MONGODB_URI=<your_mongodb_atlas_connection_string>
     JWT_SECRET=<generate_strong_random_secret_min_32_chars>
     FRONTEND_URL=https://assignment-sql-platform-frontend.onrender.com
     ```

4. Click **Create Web Service**

### Frontend Deployment

1. **Deploy Static Site:**
   - Click **New +** → **Static Site**
   - Connect your repository
   - Configure:
     - **Name:** `assignment-sql-platform-frontend`
     - **Root Directory:** `frontend`
     - **Build Command:** `npm install && npm run build`
     - **Publish Directory:** `dist`
   
   - **Environment Variables:**
     ```
     VITE_API_URL=https://assignment-sql-platform-frontend.onrender.com
     ```

2. Click **Create Static Site**

### Post-Deployment

After both services are deployed:

1. Update backend `FRONTEND_URL` environment variable with actual frontend URL
2. Update frontend `VITE_API_URL` with actual backend URL
3. Trigger manual redeploy if needed

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (protected)

### Assignments
- `GET /api/assignments` - Get all assignments
- `GET /api/assignments/:id` - Get specific assignment
- `POST /api/assignments` - Create assignment (admin)
- `PUT /api/assignments/:id` - Update assignment (admin)

### Query Execution
- `POST /api/run-query` - Execute SQL query
  ```json
  {
    "query": "SELECT * FROM users;",
    "assignmentId": "123"
  }
  ```

### Hints
- `POST /api/get-hint` - Get AI-powered hint
  ```json
  {
    "assignmentId": "123",
    "userQuery": "SELECT * FROM..."
  }
  ```

## 🔐 Environment Variables Reference

### Backend Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | `9000` |
| `NODE_ENV` | Environment | `production` |
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user:pass@host:5432/db` |
| `MONGODB_URI` | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/db` |
| `JWT_SECRET` | Secret key for JWT tokens | Min 32 characters |
| `FRONTEND_URL` | Frontend URL for CORS | `https://your-frontend.onrender.com` |

### Frontend Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API URL | `https://your-backend.onrender.com` |

## 🐛 Troubleshooting

### Backend Issues

**Server won't start:**
- Check all environment variables are set
- Verify database connection strings
- Check Render logs: Dashboard → Service → Logs

**Database connection failed:**
- Use **Internal Database URL** for Render PostgreSQL
- Whitelist all IPs (0.0.0.0/0) in MongoDB Atlas
- Verify credentials are correct

**CORS errors:**
- Ensure `FRONTEND_URL` matches your actual frontend URL
- Check CORS configuration in `server.js`

### Frontend Issues

**Can't connect to backend:**
- Verify `VITE_API_URL` is correct
- Check backend service is running
- Open browser console for detailed errors

**Build fails:**
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version compatibility

### Render Free Tier Limitations

- Services spin down after 15 minutes of inactivity
- First request after sleep takes 30-60 seconds
- 750 hours/month free (enough for 1 service running 24/7)
- Consider upgrading for production use

## 📊 Database Schema

### PostgreSQL (SQL Practice)
Used for executing user SQL queries in a sandboxed environment.

### MongoDB Collections

**Users:**
```javascript
{
  _id: ObjectId,
  username: String,
  email: String,
  password: String (hashed),
  createdAt: Date
}
```

**Assignments:**
```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  difficulty: String,
  expectedQuery: String,
  testCases: Array,
  createdAt: Date
}
```

## 🤝 Contributing

This is a learning project. Feel free to fork and modify for your own use.

## 📝 License

ISC

## 👨‍💻 Development Notes

- Frontend uses Vite for fast HMR and optimized builds
- Backend uses Express 5 with modern async/await patterns
- JWT tokens stored in localStorage (consider httpOnly cookies for production)
- SQL queries are executed in isolated PostgreSQL environment
- AI hints powered by external API integration

## 🔗 Useful Links

- [Render Documentation](https://render.com/docs)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [React Documentation](https://react.dev/)
- [Express Documentation](https://expressjs.com/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

---

**Built with ❤️ for SQL learners**
