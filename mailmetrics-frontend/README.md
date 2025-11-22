Here is a **clean, short, professional README** for your **MailMetrics Frontend (React + Vite)** — matching the backend one.

---

# 📦 MailMetrics Frontend (React + Vite + MUI + Recharts)

This is the frontend interface for **MailMetrics**, a dashboard-based email campaign management platform.
It allows users to manage campaigns, view email analytics, and authenticate using JWT.

---

# 🎨 Features

* React (Vite) ultra-fast frontend
* Material UI (MUI) components
* DataGrid for campaigns & emails
* Recharts for analytics visualization
* JWT Authentication (Login consumes `/api/token/`)
* Axios API client with interceptors
* Sidebar + Topbar layout
* Dashboard, Campaigns, Emails, and Reports pages

---

# ⚙️ Installation

### 1. Navigate to frontend folder

```bash
cd frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

Runs at:

```
http://localhost:5173
```

---

# 🔗 API Configuration

The frontend expects the backend at:

```
http://localhost:8000/api/
```

Axios client automatically attaches JWT from `localStorage`.

Update base URL in `axiosClient.js` if needed:

```js
baseURL: "http://localhost:8000/api"
```

---

# 🧱 Project Structure

```
src/
│── api/            # Axios API calls
│── components/     # UI components (Sidebar, Topbar, Charts)
│── pages/          # Dashboard, Campaigns, Reports, Login
│── styles/         # Global CSS
│── App.jsx         # Routing setup
```

---

# 🔐 Authentication Flow

1. User logs in
2. Receives `access` + `refresh` token
3. Tokens stored in `localStorage`
4. Axios interceptor attaches `Authorization: Bearer <token>` automatically

---

# 📊 Libraries Used

* **Material UI** (UI components)
* **MUI DataGrid** (tables)
* **Recharts** (charts)
* **React Router v7**
* **Axios**
* **Vite** (bundler)

---

# 🏗 Build for Production

```bash
npm run build
```

Preview build:

```bash
npm run preview
```

---
