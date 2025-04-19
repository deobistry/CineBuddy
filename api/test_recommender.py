from movie_recommender import MovieRecommender

# Test the recommender
recommender = MovieRecommender()

# Test some queries
test_queries = [
    "Action movies with great special effects",
    "Movies like The Godfather",
    "Best comedies from 2020",
    "Sci-fi movies with time travel"
]

for query in test_queries:
    print(f"\nQuery: {query}")
    results = recommender.recommend(query, max_results=3)
    for i, movie in enumerate(results, 1):
        print(f"{i}. {movie['title']} ({movie['year']}) - {movie['genres']}")