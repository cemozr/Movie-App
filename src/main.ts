import { UpcomingMovies } from "./UpcomingMovies.js";
import { PopularMovies } from "./PopularMovies.js";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDJhZGNmYTk4NjQ1NWRlMGVjNTgzMGFkZTJlNTRlMCIsInN1YiI6IjY0YzlmZmU2MGI3NGU5MDBjOTk4MjljMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cMtQl2ezyIcmAsymoRHp32ecaTO5Z_6qy-ibKjkWKsU",
  },
};
const upComingMoviesUrl =
  "https://api.themoviedb.org/3/movie/upcoming?language=tr-TR&page=1";
const popularMoviesUrl =
  "https://api.themoviedb.org/3/movie/popular?language=tr-TR&page=1";

const upComingMoviesCardsContainer = document.getElementById("upcoming-movies");
const upcomingMoviesCards =
  upComingMoviesCardsContainer?.querySelectorAll(".card");

const popularMoviesCardsContainer = document.getElementById("popular-movies");
const popularMoviesCards =
  popularMoviesCardsContainer?.querySelectorAll(".card");
const popularMoviesCardsInfo =
  popularMoviesCardsContainer?.querySelectorAll(".pmovie-info");

async function fetchUpcomingMovies() {
  const response = await fetch(upComingMoviesUrl, options);
  const upcomingMovies = await response.json();
  return upcomingMovies;
}
async function fetchPopularMovies() {
  const response = await fetch(popularMoviesUrl, options);
  const popularMovies = await response.json();
  return popularMovies;
}
fetchUpcomingMovies().then((upcomingMovies) => {
  for (let i = 0; i < 5; i++) {
    let uMovie = new UpcomingMovies(
      upcomingMovies.results[i].id,
      upcomingMovies.results[i].genre_ids,
      upcomingMovies.results[i].title,
      upcomingMovies.results[i].overview,
      upcomingMovies.results[i].release_date,
      upcomingMovies.results[i].poster_path,
      upcomingMovies.results[i].vote_average
    );

    upcomingMoviesCards![i].children[0].setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w500${uMovie.poster_path}`
    );

    upcomingMoviesCards![i].children[1].children[0].innerHTML = uMovie.title;

    upcomingMoviesCards![
      i
    ].children[1].children[1].innerHTML = `Çıkış Tarihi: ${uMovie.release_date}`;
    upcomingMoviesCards![
      i
    ].children[1].children[2].innerHTML = `Puan: ${uMovie.vote_average}`;
  }
});
fetchPopularMovies().then((popularMovies) => {
  for (let i = 0; i < 4; i++) {
    const pMovie = new PopularMovies(
      popularMovies.results[i].id,
      popularMovies.results[i].genre_ids,
      popularMovies.results[i].title,
      popularMovies.results[i].overview,
      popularMovies.results[i].release_date,
      popularMovies.results[i].poster_path,
      popularMovies.results[i].vote_average
    );
    popularMoviesCards![i].children[0].children[0].children[0].setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w500${pMovie.poster_path}`
    );

    popularMoviesCardsInfo![i].children[0].innerHTML = pMovie.title;
    popularMoviesCardsInfo![i].children[1].innerHTML = pMovie.overview;
  }
});
