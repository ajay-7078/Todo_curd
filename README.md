# 🚀 Premium Todo CRUD App

A fully-featured Todo management application built with Node.js, Express, MongoDB, and EJS with a stunning glassmorphism UI design.

## ✨ Features

### 🎨 Premium UI Design
- **Glassmorphism** effects with backdrop blur
- **Animated gradients** and floating background elements
- **Smooth animations** on all interactions
- **Responsive design** that works on all devices
- **Dark mode** by default with beautiful color scheme

### 📋 Todo Management
- ✅ Create new tasks
- ✏️ Edit existing tasks
- 🗑️ Delete tasks
- ✓ Mark tasks as complete/incomplete
- 📅 View creation dates
- 📊 Task counter

### 🔐 Authentication
- User registration with validation
- Secure login with password hashing (bcryptjs)
- Session management with express-session
- Protected routes with authentication middleware
- Logout functionality

### ⚡ Performance
- Error handling middleware
- Async/await with proper error catching
- Input validation
- Duplicate email prevention
- Database connection error handling

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Frontend**: EJS templates, Tailwind CSS
- **Authentication**: bcryptjs, express-session
- **Dev Tools**: nodemon, dotenv

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB account (MongoDB Atlas)
- npm or yarn

### Steps

1. **Clone or navigate to the project**
```bash
cd TODO_Curd
```

2. **Install dependencies**
```bash
npm install
```

3. **Create .env file**
```bash
# Copy from .env.example
cp .env.example .env

# Edit .env with your MongoDB URI
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/todo_app?retryWrites=true&w=majority
PORT=3000
```

4. **Run the development server**
```bash
npm run dev
```

5. **Open in browser**
```
http://localhost:3000
```

## 📝 Usage

### Registration
1. Click "Sign up" on the login page
2. Enter your name, email, and password (minimum 6 characters)
3. Click "Create Account"
4. You'll be redirected to login

### Login
1. Enter your email and password
2. Click "Sign In"
3. You'll see your dashboard with all tasks

### Create Task
1. In the dashboard, type your task in the input field
2. Click "Add Task"
3. Your task will appear in the list

### Edit Task
1. Click the ✏️ button on any task
2. Update the task description
3. Click "Update Task"

### Complete Task
1. Click the ✓ button to mark task as complete
2. The task will show a strikethrough and date

### Delete Task
1. Click the 🗑️ button on any task
2. Confirm the deletion

### Logout
1. Click the "Logout" button in the navbar
2. You'll be redirected to the login page

## 🎨 Design Features

### Glassmorphism
- Semi-transparent cards with 10-20px blur effect
- Glass borders with subtle borders
- Layered transparency for depth
- Smooth gradient transitions

### Animations
- Fade-in animations for page load
- Slide animations for cards
- Hover effects on buttons
- Staggered animations for task lists
- Ripple effects on button clicks
- Float animation on background elements

### Color Palette
| Color | Hex | Usage |
|-------|-----|-------|
| Primary | #6366f1 | Buttons, links |
| Secondary | #8b5cf6 | Hover effects |
| Accent | #ec4899 | Highlights |
| Success | #10b981 | Complete task |
| Danger | #ef4444 | Delete button |
| Background | #0f172a to #312e81 | Page background |

## 📂 Project Structure

```
TODO_Curd/
├── app.js                 # Main application file
├── package.json           # Dependencies
├── .env.example          # Environment variables template
├── public/
│   └── style.css         # Glassmorphism styles
├── config/
│   └── db.js             # Database configuration
├── models/
│   ├── Todo.js           # Todo schema
│   └── user.js           # User schema
├── controllers/
│   ├── authController.js # Authentication logic
│   └── todoController.js # Todo operations
├── routes/
│   ├── authRoutes.js     # Auth endpoints
│   └── todoRoutes.js     # Todo endpoints
├── middleware/
│   └── auth.js           # Authentication middleware
└── views/
    ├── index.ejs         # Dashboard
    ├── login.ejs         # Login page
    ├── register.ejs      # Registration page
    ├── edit.ejs          # Edit todo page
    ├── error.ejs         # Error page
    └── partials/
        ├── header.ejs    # Navigation
        └── footer.ejs    # Footer
```

## 🔧 API Routes

### Authentication
- `GET /register` - Registration page
- `POST /register` - Create new user
- `GET /login` - Login page
- `POST /login` - User login
- `GET /logout` - User logout

### Todos
- `GET /` - Dashboard (home page with todos)
- `GET /dashboard` - Dashboard (alternative)
- `POST /create` - Create new todo
- `GET /edit/:id` - Edit todo page
- `POST /update/:id` - Update todo
- `GET /delete/:id` - Delete todo
- `GET /toggle/:id` - Mark todo as complete/incomplete

## 🐛 Bug Fixes & Improvements

### Fixed Issues
- ✅ Added missing toggle functionality for task completion
- ✅ Input validation for registration
- ✅ Email uniqueness validation
- ✅ Proper error handling middleware
- ✅ Async error catching with asyncHandler
- ✅ Better error messages and alerts
- ✅ Database connection error handling

### Code Quality
- ✅ Consistent error handling
- ✅ Proper async/await usage
- ✅ Input sanitization
- ✅ Session management
- ✅ Protected routes

## 🚀 Performance Optimization

- Database queries sorted by creation date
- Efficient CSS with glassmorphism (no extra requests)
- Optimized animations with CSS transitions
- Minified CSS classes with Tailwind
- Proper middleware ordering

## 🔒 Security Features

- Password hashing with bcryptjs (10 rounds)
- Session-based authentication
- Protected routes with auth middleware
- Input validation on server side
- CSRF protection via session tokens
- Secure cookie settings

## 📱 Responsive Design

- Mobile-first approach with Tailwind CSS
- Flexible grid layouts
- Touch-friendly button sizes
- Responsive navigation
- Works on all screen sizes (320px - 4K)

## 🌟 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📝 Environment Variables

```env
# MongoDB Connection String
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database_name

# Server Port
PORT=3000

# Session Secret
SESSION_SECRET=your-secret-key
```

## 🚧 Development

### Run Development Server
```bash
npm run dev
```

### Project will:
- Auto-reload on file changes (nodemon)
- Connect to MongoDB
- Start on port 3000
- Show connection logs

## 📚 Dependencies

- **express**: Web framework
- **mongoose**: MongoDB ODM
- **express-session**: Session management
- **ejs**: Template engine
- **bcryptjs**: Password hashing
- **dotenv**: Environment variables
- **nodemon**: Auto-reload (dev)
- **tailwindcss**: CSS utility classes

## 🎓 Learning Resources

This project demonstrates:
- RESTful API design
- MVC architecture
- Database modeling
- Authentication implementation
- Modern UI design principles
- Glassmorphism effects
- CSS animations
- Server-side templating

## 🤝 Contributing

Feel free to fork and improve!

## 📄 License

ISC

## 👨‍💻 Author

Built with ❤️ using Node.js, Express & MongoDB

---

**Happy Todo-ing! 🚀✨**
