# ⚽ Soccer Match Schedule API

A simple Node.js + Express backend that fetches and serves **upcoming football matches** for the Brazilian Série A (BSA) league using the [Football-Data.org](https://www.football-data.org/) API.

---

## 🚀 Features

- Retrieves upcoming scheduled matches from the official football-data API.
- Filters matches scheduled within the **next 14 days**.
- Caches data in memory for **60 seconds** to reduce API calls.
- Enables **CORS** for easy integration with frontend apps.

---

## 📦 Technologies Used

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Axios](https://axios-http.com/)
- [Football-Data.org API](https://www.football-data.org/)
- [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

---

## 🔧 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/vijit-vishnoi/soccer_db.git
cd soccer_db
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set your API key

Open the project file and locate this line:

```js
const FOOTBALL_API_KEY = 'fd15c23bca1e40788e6a955b1b5a9b31';
```

Replace the value with your own API key from [football-data.org](https://www.football-data.org/).

### 4. Start the server

```bash
node index.js
```

The server will start on port **3001** or whatever is specified in `process.env.PORT`.

---

## 📡 API Endpoint

### `GET /upcoming`

Fetches upcoming matches in the Brazilian Série A scheduled within the next 14 days.

#### ✅ Example Response:

```json
[
  {
    "home": "Flamengo",
    "away": "Palmeiras",
    "date": "2025-06-01T23:00:00Z"
  },
  {
    "home": "Santos",
    "away": "Corinthians",
    "date": "2025-06-03T20:00:00Z"
  }
]
```

---

## 🌐 Deployment

This backend can be deployed on any Node.js-compatible platform, such as:

- [Render](https://render.com/)
- [Heroku](https://www.heroku.com/)
- [Vercel (for serverless functions)](https://vercel.com/)
- [Railway](https://railway.app/)

---

## 🧠 Notes

- This project uses **in-memory caching** to avoid making repeated API calls. Cached data is refreshed every 60 seconds.
- Only read operations are supported (no write/update/delete).
- You must have a valid API key from [football-data.org](https://www.football-data.org/).

---

## 📃 License

This project is licensed under the MIT License.
