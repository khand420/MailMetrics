# BACKEND


---

# 📦 MailMetrics Backend (Django + DRF + JWT + Celery)

This is the backend service for **MailMetrics**, an email campaign automation platform.
It handles campaign management, email processing, JWT authentication, background tasks, and daily reporting.

---

# 🚀 Features

* JWT Authentication using **SimpleJWT**
* REST API using **Django REST Framework**
* Email Campaign Management
* Asynchronous processing with **Celery + Redis**
* Scheduled tasks for:

  * Executing scheduled campaigns
  * Generating daily email delivery reports
* CORS enabled for frontend (React)
* SQLite database (can switch to PostgreSQL)

---

# ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/khand420/MailMetrics
cd backend
```

### 2. Create virtual environment

```bash
python -m venv venv
source venv/bin/activate   # macOS / Linux
venv\Scripts\activate      # Windows
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Run migrations

```bash
python manage.py migrate
```

### 5. Create admin user

```bash
python manage.py createsuperuser
```

### 6. Start Django server

```bash
python manage.py runserver
```

Backend runs at:

```
http://127.0.0.1:8000/
```

---

# 🔐 Authentication

### JWT Token Endpoint:

```
POST /api/token/
```

Body:

```json
{
  "username": "KHAND",
  "password": "12345"
}
```

---

# 📨 Celery Setup

Requires **Redis** running locally.

### Start Celery Worker

```bash
celery -A core worker --loglevel=info
```

### Start Celery Beat

```bash
celery -A core beat --loglevel=info
```

Celery handles:

* Checking scheduled campaigns every minute
* Generating daily reports at midnight

---

# 🔗 CORS

Enabled for React frontend:

```
http://localhost:5173
```

---

# 📁 Apps Included

* **campaigns**
  Handles Campaign, Email, and Report models + tasks.

---

# 📧 Email Sending (Optional)

SMTP config available in settings (commented out).

---

# ✔ Ready to Use

Your backend is fully configured for JWT auth, async tasks, and API usage for the MailMetrics frontend.


---



# FRONTEND SETUP



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

