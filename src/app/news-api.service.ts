import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
// Add your API key here
api_key = "f19b043cfe8f4dc9bc1fc4e2698ce78b";

constructor(private http: HttpClient) {}

// function to get list of all news sources
initSources() {
  return this.http.get(
    "https://newsapi.org/v2/sources?language=en&apiKey=" + this.api_key
  );
}

// function to get a list of headlines
initArticles() {
  return this.http.get(
    "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=" +
      this.api_key
  );
}

// function to get a list of headlines for a user-selected source
getArticlesByID(source: String) {
  return this.http.get(
    "https://newsapi.org/v2/top-headlines?sources=" +
      source +
      "&apiKey=" +
      this.api_key
  );
}
}
