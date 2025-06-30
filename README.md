# 🛒 Sales System API

A simple sales system built with Node.js for managing user registration, login, and role-based access control. Designed for both employee-facing and customer-facing use cases.

## 🚀 Technologies Used

- **Node.js** & **Express** – RESTful API
- **MySQL** – Relational database
- **Prisma ORM** – Database access and migrations
- **JWT (jsonwebtoken)** – Authentication via tokens
- **bcryptjs** – Secure password hashing
- **dotenv** – Environment variable management
- **Insomnia** – API testing

---

## 📦 Features

- ✅ User registration with password hashing
- ✅ User login with JWT token generation
- ✅ Role-based access (`employee` and `customer`)
- ✅ Protected routes with middleware
- ✅ Modular project structure (auth, routes, controllers)

---

## 🔐 Authentication

Users receive a **JWT** upon successful login.  
This token must be sent in the `Authorization` header for protected routes:

