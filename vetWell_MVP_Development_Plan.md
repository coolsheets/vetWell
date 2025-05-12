# 🐾 vetWell MVP Development & Demonstration Plan

## Overview

This document outlines an incremental development procedure for the vetWell MVP—a MERN-stack pet wellness application supporting pet owners and veterinarians through scheduling, pet tracking, and health record sharing.

---

## 🛠️ Tech Stack

- **Frontend:** Vite + React + TailwindCSS  
- **Backend:** Node.js + Express.js  
- **Database:** MongoDB (Mongoose ORM)  
- **Auth:** JWT + Role-based Access  
- **Deployment:** Netlify (client) + Render or Railway (server)

---

## 📆 Timeline Overview

| Week | Focus Area                         | Key Deliverables                             |
|------|------------------------------------|----------------------------------------------|
| 1    | Foundation & Auth                  | Repo setup, Auth working for vet/owner       |
| 2    | Pet Management                     | Owners can CRUD pets                         |
| 3    | Appointments System                | Booking + viewing appointments               |
| 4    | Vet Tools & Logs                   | Vet adds logs; owners view logs              |
| 5    | Analytics & Reporting              | Dashboards with charts/summaries             |
| 6    | Polish, Testing & Pilot Prep       | UX polish, testing, pilot-ready MVP          |

---

## 🔁 Phase 1: Foundation & Setup (Week 1)

### 🎯 Goals
- Lay technical groundwork
- Implement basic authentication
- Confirm project scaffolding

### ✅ Tasks
- Initialize repo + CI/CD
- Setup Vite + Tailwind for client
- Setup Express API + MongoDB for server
- Add JWT-based login/signup with roles

### 📦 Demo Deliverable
- User sign-up/login (vet or owner)
- Redirected to role-specific dashboard

---

## 🐶 Phase 2: Pet Management (Week 2)

### 🎯 Goals
- Core CRUD features for pet data

### ✅ Tasks
- Create `Pet` model and routes
- Build UI for pet list and forms
- Add modals for "Add/Edit Pet"

### 📦 Demo Deliverable
- Owner dashboard displays pet list
- Add, update, delete pet records

---

## 📅 Phase 3: Appointment System (Week 3)

### 🎯 Goals
- Scheduling and display of appointments

### ✅ Tasks
- Define `Appointment` model and API
- Booking modal for owners
- Schedule view for vets

### 📦 Demo Deliverable
- Owners can book vet appointments
- Vets see upcoming bookings

---

## 🧪 Phase 4: Vet Logs & Records (Week 4)

### 🎯 Goals
- Wellness logs created by vet, viewed by owner

### ✅ Tasks
- Extend Pet model with health logs
- Create vet-side log input UI
- Show timeline of pet logs to owners

### 📦 Demo Deliverable
- Vets can enter visit summaries/logs
- Owners view logs per pet

---

## 📊 Phase 5: Analytics & Reporting (Week 5)

### 🎯 Goals
- Data visualizations and summaries

### ✅ Tasks
- Integrate a chart library (e.g., Recharts)
- Summarize appointments, treatments
- Filter by pet/date/type

### 📦 Demo Deliverable
- Dashboard includes simple charts or summary stats

---

## 🧼 Phase 6: Polish & Pilot Prep (Week 6)

### 🎯 Goals
- UX enhancements, testing, pilot readiness

### ✅ Tasks
- Add validations, loaders, error boundaries
- Add unit/integration tests (Jest + RTL)
- Write basic docs (README, setup, usage)
- Deploy on Netlify/Render for testing

### 📦 Demo Deliverable
- Stable MVP ready for internal or external pilot
