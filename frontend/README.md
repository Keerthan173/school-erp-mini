# 🎨 Frontend — School ERP System (React + Bootstrap)

This is the **frontend** of the School ERP System built using **React** with **Bootstrap** for UI styling.  
The frontend communicates with the backend via a REST API and uses JWT-based authentication.

---

## 🚀 Live Demo

Frontend: https://school-erp-mini.vercel.app/  
Backend API: https://school-erp-mini-backend.onrender.com/api  

---

## 🛠 Tech Stack

- React (Create React App)
- React Router
- Axios
- Bootstrap 5
- Context API for Auth State

---

## 🔐 Core Features (Frontend)

### ✔ Authentication
- Login & Register forms  
- Stores JWT in localStorage  
- Protected routes using Context + Wrapper component  

### ✔ Attendance Module
- Mark present / absent  
- Fetch attendance history  

### ✔ Bus Booking Module
- View available buses  
- Book seats  
- Refresh bus list  

### ✔ Booking History
- View previous seat bookings  
- Shows bus number, route, timestamp  

### ✔ UI Features
- Global Navbar  
- Logout functionality  
- Responsive Bootstrap UI  

---

## 📦 Running the Frontend Locally

### 1️⃣ Navigate to the frontend folder
```bash
cd frontend
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Start development server
```bash
npm start
```

Runs at:  
`http://localhost:3000`

---

## 🔗 Backend Integration

The frontend uses the API base URL defined in:

```
src/services/api.js
```

Example:

```js
baseURL: "https://school-erp-mini-backend.onrender.com/api"
```

---

## 📁 Folder Structure

```
frontend/
│
├── src/
│   ├── pages/           # Login, Register, Dashboard, Attendance, etc.
│   ├── components/      # Navbar, ProtectedRoute
│   ├── context/         # AuthContext
│   ├── services/        # Axios API setup
│   ├── App.js
│   └── index.js
│
├── public/
└── package.json
```

---

## 🌍 Deployment

Deployed on **Vercel** with:

- Root Directory: `frontend`
- Framework: Create React App  
- Build Command: `npm run build`  
- Output Directory: `build`  

---

## ✨ Author

**Keerthan K**  
GitHub: https://github.com/Keerthan173  

