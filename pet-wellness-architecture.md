# 🐾 Pet Wellness MVP – Full Stack Architecture

A scalable, dual-role (Veterinary & Owner) web app built using the MERN stack with Vite for frontend bundling.

---

## ✅ Overview

| Layer         | Tech Stack                                  | Purpose                                              |
|---------------|----------------------------------------------|------------------------------------------------------|
| Frontend      | React (via Vite), Tailwind CSS, React Router, Axios | Owner & Vet UI with role-aware views       |
| Backend       | Node.js, Express.js                          | RESTful API, Auth, Business Logic                    |
| Database      | MongoDB Atlas, Mongoose                      | Flexible schema for pet health records               |
| Auth          | JWT or OAuth (Google, Apple optional)        | Secure, role-based access                            |
| Deployment    | Vercel (Frontend), Render/Railway (Backend)  | Serverless or container-based hosting                |
| Optional UX   | React Query / Zustand                        | Client-side data caching, global state               |
| Monitoring    | Sentry, Logtail, MongoDB Atlas Alerts        | DevOps and error monitoring                          |

---

## 🧩 Feature Modules

### 🏠 Owner Dashboard
- View pet profiles
- Add/edit medical records
- Book appointments
- Communicate with vet

### 🧑‍⚕️ Vet Dashboard
- Access assigned pet records
- Manage appointments
- Add diagnoses or treatments
- View owner-submitted symptoms

### 🐶 Pet Profile
- Name, breed, age, photo
- Medical history (vaccine, treatment, visit notes)
- Owner information

### 📅 Appointment Scheduler
- Calendar integration (Google Calendar optional)
- Vet-side and Owner-side creation and management

---

## 📁 Folder Structure

```
pet-wellness-mvp/
├── client/                   # React App (Vite)
│   └── src/
│       ├── pages/
│       ├── components/
│       ├── services/         # API utilities
│       └── context/          # Auth & global state
├── server/                   # Node API
│   ├── models/               # User, Pet, Appointment
│   ├── routes/               # REST API endpoints
│   ├── controllers/          # Logic handlers
│   └── middleware/           # Auth, error handling
└── .env                      # Secure credentials
```

---

## 🌐 API Endpoints

| Route                  | Description                             |
|------------------------|-----------------------------------------|
| `POST /api/auth`       | Register/Login                          |
| `GET /api/pets`        | List pets (vet/owner)                   |
| `POST /api/pets`       | Create pet profile                      |
| `PUT /api/pets/:id`    | Update pet info                         |
| `GET /api/records`     | Fetch medical records                   |
| `POST /api/records`    | Add new record                          |
| `GET /api/appointments`| View scheduled appointments             |

---

## 📱 Optional Expansion

- **Mobile App (React Native + Expo)**
  - Shared logic/components with React
  - Supports offline health tracking

- **Admin Panel**
  - Custom React admin or third-party like Retool

---

## 🔐 Security Considerations

- Password hashing (bcrypt)
- Token-based access (JWT)
- Role-based middleware
- CORS + HTTPS enforcement

---

## 📦 Recommended Hosting Services

| Component    | Recommended Platform |
|--------------|----------------------|
| Frontend     | Vercel               |
| Backend API  | Render or Railway    |
| Database     | MongoDB Atlas        |
| Auth (OAuth) | Auth0 or Firebase    |

---

## 🚀 Ready to Build?

Start with:
```
npm create vite@latest client --template react
npm init in `/server`
```
- Setup `.env`, MongoDB URI, and auth middleware
