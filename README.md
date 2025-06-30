# 🛒 Sales System (API + Frontend)

A simple and modular sales system with role-based authentication. Includes a Node.js backend and a React frontend, designed for administrative, employee, and customer-facing use cases.

---

## 🚀 Technologies Used

### Backend
- **Node.js** & **Express** – RESTful API
- **MySQL** – Relational database
- **Prisma ORM** – Database access and migrations
- **JWT** (`jsonwebtoken`) – Token-based authentication
- **bcryptjs** – Secure password hashing
- **dotenv** – Environment variable management

### Frontend
- **React + Vite** – Fast and modular user interface
- **React Router DOM** – Client-side routing
- **Bootstrap 5** – Responsive design and components
- **jwt-decode** – Token decoding on the client

---

## 📦 Current Features

### 🔐 Backend
- ✅ User registration with validation
- ✅ Login and JWT generation
- ✅ Role-based access control (`admin`, `employee`, `customer`)
- ✅ Middleware to protect routes based on token and role
- ✅ Clean and modular project structure

### 🖥️ Frontend
- ✅ Login and session handling with localStorage
- ✅ Role extraction via token decoding
- ✅ Automatic redirection after login based on user role
- ✅ Protected "Register" button only visible to `admin`
- ✅ Role-based UI control (visibility and access)

---

## 🛠️ Upcoming Features

- 🔄 Logout and token expiration handling
- 🧾 Dynamic dashboards for employees and customers
- 📝 Sales form (create, list, filter)
- 📊 Visual reports (sales by employee, by date, etc.)
- 🧑‍💼 Admin panel for user management
- 📁 Export reports to PDF/CSV
- 🌐 Full deployment-ready setup (frontend + backend)

---

## 🔐 Using the Token

Upon successful login, the backend returns a **JWT**.  
This token must be included in protected requests using the following header:

