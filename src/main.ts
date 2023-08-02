const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDJhZGNmYTk4NjQ1NWRlMGVjNTgzMGFkZTJlNTRlMCIsInN1YiI6IjY0YzlmZmU2MGI3NGU5MDBjOTk4MjljMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cMtQl2ezyIcmAsymoRHp32ecaTO5Z_6qy-ibKjkWKsU",
  },
};

fetch(
  "https://api.themoviedb.org/3/movie/upcoming?language=tr-TR&page=1",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
