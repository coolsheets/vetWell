# Pet Wellness MVP


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
- `npx create-react-app client` (or Vite)
- `npm init` in `/server`
- Setup `.env`, MongoDB URI, and auth middleware
