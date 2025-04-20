# 🎬 CineBuddy — Your Personal NLP-Powered Movie & Web Series Recommender

CineBuddy is a smart and intuitive recommendation system that helps you discover movies and web series using natural language. Just ask questions like:

> _"Movies like Interstellar"_  
> _"Best Tamil thrillers from 2022"_  
> _"Hindi web series with comedy"_  

It combines powerful NLP techniques with real-time movie data from TMDB to understand user intent and return personalized, diverse results.

---

## 🌟 Features

✅ Understands natural language queries using **NLP**  
✅ Trained on 8000+ titles including **Hollywood**, **Bollywood**, **South Indian**, and **Web Series**  
✅ Uses **TF-IDF + Cosine Similarity** for relevance ranking  
✅ Automatically extracts filters (genre, year, language, content type)  
✅ Clean and responsive **frontend UI**  
✅ RESTful **Flask API** backend  
✅ Dataset includes cast, director, genres, keywords, and more  
✅ 📊 Realtime filter data & dataset stats

---
📷 Screenshots
---
![image alt](https://github.com/deobistry/CineBuddy/blob/1a188a9245724117b4a522f051f02f62e022a996/Screenshot%20(38).png)
![image alt](https://github.com/deobistry/CineBuddy/blob/1a188a9245724117b4a522f051f02f62e022a996/Screenshot%20(39).png)

---


## 🧠 How It Works

1. **Data Fetching from TMDB**  
   - Collects thousands of movies and TV shows using TMDB’s genre, language, year, and studio filters.

2. **Preprocessing and Corpus Creation**  
   - Each title is turned into a document with overview, cast, genres, year, keywords, etc.
   - NLP cleaning: lowercasing, stop word removal, lemmatization using **NLTK**.

3. **Query Understanding**  
   - Extracts context (like genre/year/language) from the query.
   - Augments the query with relevant synonyms based on emotion or genre (e.g., "happy" → "feel-good, comedy").

4. **Recommendation Engine**  
   - Computes cosine similarity between the query and all movie documents using **TF-IDF**.
   - Filters based on genre, language, year, and type before ranking.

5. **Frontend Interaction**  
   - The user enters a query via the HTML UI.
   - JavaScript sends a POST request to the backend and renders top 10 results with metadata and poster.

---

## 📁 Project Structure

```
CineBuddy/
│
├── api/
│   ├── movie_recommender.py      # Main backend logic (Flask API + NLP)
│   ├── test_recommender.py       # CLI testing script for recommendations
│   └── requirements.txt          # Python dependencies
│
├── frontend/
│   ├── index.html                # Main HTML file (user interface)
│   ├── css/
│   │   └── styles.css            # Styling for the web interface
│   └── js/
│       └── script.js             # JavaScript for search, API calls, rendering
│
├── venv/                         # Python virtual environment (excluded from Git)
├── movie_data.json               # Full movie dataset cached locally from TMDB
├── tmdb_api_key.txt              # TMDB API Key (DO NOT push to GitHub)
└── README.md                     # Complete project documentation and usage guide

```

---

## 💻 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/cinebuddy.git
cd cinebuddy
```

### 2. Install Python dependencies

```bash
pip install -r requirements.txt
```

### 3. Download NLTK assets

```python
import nltk
nltk.download('punkt')
nltk.download('wordnet')
nltk.download('stopwords')
```

### 4. Get TMDB API Key

- Go to [TMDB Developer Page](https://developers.themoviedb.org/)
- Sign up and copy your API key.
- Create a file `tmdb_api_key.txt` in the root folder and paste your key inside.

---

## 🚀 Running CineBuddy

### Step 1: Start the backend

```bash
python movie_recommender.py
```

The Flask server will run at: [http://localhost:5000](http://localhost:5000)

### Step 2: Open the frontend

Simply open `index.html` in your browser. It connects automatically with the local Flask server.

---

## 💡 Example Natural Language Queries

> CineBuddy can understand these and many more:

- _"Top Hollywood thrillers from the 90s"_  
- _"Romantic Hindi movies with SRK"_  
- _"Best Tamil action movies"_  
- _"Movies about AI and robots"_  
- _"Comedy web series from 2021"_  
- _"Movies like The Dark Knight"_

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/recommend` | Get top recommendations by query |
| `GET`  | `/api/movie/<movie_id>` | Get detailed info for a movie |
| `GET`  | `/api/filters` | Available filters (genres, years, languages) |
| `GET`  | `/api/stats` | Stats on your dataset (genre/language/year-wise) |

### Sample `POST /api/recommend` Request

```json
{
  "query": "best sci-fi thrillers with space",
  "n": 10
}
```

---

## 🧪 Testing the Recommender

Run the CLI test script:

```bash
python test_recommender.py
```

This will output top 3 recommendations for a set of predefined queries.

---

## 📈 Dataset Summary

After initial fetch, CineBuddy contains:

| Category       | Count (approx) |
|----------------|----------------|
| Hollywood      | 5000+          |
| Bollywood      | 2000+          |
| South Indian   | 500+           |
| Web Series     | 500+           |
| **Total**      | 8000+ titles   |

Each entry includes:

- Title + Overview
- Year of Release
- Genres
- Cast
- Director
- Poster
- Language
- Keywords
- TF-IDF friendly `document` for NLP

---

## 📋 License

```
CineBuddy - A Movie Recommendation System Using NLP
Copyright (C) 2025  Divyanshu Bansal

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published
by the Free Software Foundation, either version 3 of the License.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU GPL v3.0
along with this program. If not, see <https://www.gnu.org/licenses/>.
```

---

## 🤝 Contributing

CineBuddy is open to ideas and collaboration!

- Found a bug? Submit an issue  
- Have a feature in mind? Open a PR  
- Want to add more filters or logic? Dive in!

---

## 🙏 Credits & Acknowledgments

- [TMDB API](https://developers.themoviedb.org/) — For movie metadata
- [NLTK](https://www.nltk.org/) — For text processing
- [scikit-learn](https://scikit-learn.org/) — For TF-IDF and similarity
- Inspiration from movie nights, popcorn, and Netflix queues 🍿

---

> Built with 💡 ideas, ☕ coffee, and 🎥 love for cinema.
```
