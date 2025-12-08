# 🎓 School ERP System (Mini) — MERN + Bootstrap

A simplified **School ERP System** built using the MERN stack with a focus on core student features such as:

- Student Authentication  
- Attendance Management  
- Bus Booking System  
- Booking History  

This project demonstrates real-world full-stack development including API design, JWT authentication, MongoDB models, protected routes, and deployment using **Render** (backend) and **Vercel** (frontend).

---

## 🚀 Live Demo

**Frontend:** https://school-erp-mini.vercel.app/ 

**Backend:** https://school-erp-mini-backend.onrender.com

---

## 🛠 Tech Stack

### **Frontend**
- React (Create React App)
- React Router
- Axios
- Bootstrap 5
- Context API (Auth state)

### **Backend**
- Node.js + Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- CORS

### **Deployment**
- **Frontend:** Vercel  
- **Backend:** Render  
- **Database:** MongoDB Atlas  

---

## 📂 Folder Structure

```
school-erp-mini/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── package.json
│
└── frontend/
    ├── src/
    ├── public/
    ├── package.json
    └── README.md
```

---

## 🔐 Features

### ✅ **Student Authentication**
- Register & Login using JWT  
- Persistent login using localStorage  
- Protected routes on frontend  

### 📘 **Attendance Module**
- Mark Present / Absent  
- View attendance history  
- Auto-attaches student ID using JWT  

### 🚌 **Bus Booking Module**
- View list of available buses  
- Book seat with one click  
- Backend auto-assigns seat number  
- Updates seats availability  

### 🎫 **Bookings History**
- Shows previous seat bookings  
- Includes bus info, route, time  

---

## 🧩 API Endpoints (Backend)

### **Auth**
```
POST /api/auth/register
POST /api/auth/login
```

### **Attendance**
```
GET  /api/attendance
POST /api/attendance
```

### **Buses**
```
GET /api/buses
```

### **Bookings**
```
GET  /api/bookings
POST /api/bookings
```

---

## 🔧 Environment Variables (Backend)

Create a `.env` file inside `/backend`:

```
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret-key
PORT=5000
```

---

## 📦 Installation & Setup

### 1️⃣ Clone repository
```bash
git clone https://github.com/Keerthan173/school-erp-mini.git
cd school-erp-mini
```

---

### 2️⃣ Install backend dependencies
```bash
cd backend
npm install
```

### Run backend
```bash
node server.js
```

---

### 3️⃣ Install frontend dependencies
```bash
cd ../frontend
npm install
```

### Run frontend
```bash
npm start
```

---

## 🌍 Deployment

### Backend → Render  
- Set root directory to `/backend`  
- Build command: `npm install`  
- Start command: `node server.js`  

### Frontend → Vercel  
- Set root directory to `/frontend`  
- Framework: Create React App  

---

## 📌 Notes

- Render free tier may take 30–50 sec to wake up after idle (cold start).  
- MongoDB Atlas needs `0.0.0.0/0` for Render IP access.  

---

## ✨ Author

**Keerthan K**  
Backend Developer in progress 🚀  
GitHub: https://github.com/Keerthan173  

---

## ⭐ If this helped, consider giving the repo a star!