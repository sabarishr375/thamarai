# Thamarai Industries — Full Stack Project
### தாமரை இன்டஸ்ட்ரீஸ்

🌐 **Live Site:** [https://thamarai-industries.vercel.app](https://thamarai-industries.vercel.app)

---

## Project Structure

```
thamarai-industries/
├── frontend/     → React + Vite (deploy to Vercel)
└── backend/      → Spring Boot (deploy to Render)
```

---

## 1. Database Setup (Supabase)

1. Go to https://supabase.com → Create a new project
2. Open **SQL Editor** → paste contents of `backend/schema.sql` → Run
3. Go to **Settings → Database** → copy the connection string
4. Update `backend/src/main/resources/application.properties`:
   ```
   spring.datasource.url=jdbc:postgresql://db.YOUR_REF.supabase.co:5432/postgres
   spring.datasource.username=postgres
   spring.datasource.password=YOUR_PASSWORD
   ```

---

## 2. Backend Setup (Spring Boot)

**Requirements:** Java 17+, Maven 3.8+

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

API runs at: `http://localhost:8080`

---

## 3. Frontend Setup (React)

**Requirements:** Node.js 18+

```bash
cd frontend
npm install
npm run dev
```

App runs at: `http://localhost:5173`

---

## 4. Deploy Backend → Render

1. Push `backend/` to a GitHub repo
2. Go to https://render.com → New Web Service
3. Connect your repo
4. Settings:
   - **Build Command:** `mvn clean package -DskipTests`
   - **Start Command:** `java -jar target/industries-1.0.0.jar`
   - **Environment:** Java 17
5. Add Environment Variables:
   - `SPRING_DATASOURCE_URL` = your Supabase JDBC URL
   - `SPRING_DATASOURCE_USERNAME` = postgres
   - `SPRING_DATASOURCE_PASSWORD` = your password

---

## 5. Deploy Frontend → Vercel

1. Push `frontend/` to a GitHub repo
2. Go to https://vercel.com → New Project → Import repo
3. Settings:
   - **Framework:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Add Environment Variable:
   - `VITE_API_BASE_URL` = your Render backend URL (e.g. `https://thamarai-api.onrender.com`)
5. Also update `CorsConfig.java` with your Vercel URL and redeploy backend

---

## Admin Panel

- URL: `/admin`
- Username: `admin`
- Password: `thamarai@2024`

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/services | Get all services |
| POST | /api/services | Add service |
| PUT | /api/services/{id} | Update service |
| DELETE | /api/services/{id} | Delete service |
| GET | /api/gallery | Get all images |
| POST | /api/gallery | Add image |
| DELETE | /api/gallery/{id} | Delete image |
| POST | /api/contact | Submit contact form |
