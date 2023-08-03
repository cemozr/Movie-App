import { IMovies } from "./IMovies";

export class PopularMovies implements IMovies {
  id: number;
  genre_ids: number[];
  title: string;
  overview: string;
  release_date: Date;
  poster_path: string;
  vote_average: number;

  constructor(
    id: number,
    genre_ids: number[],
    title: string,
    overview: string,
    release_date: Date,
    poster_path: string,
    vote_average: number
  ) {
    this.id = id;
    this.genre_ids = genre_ids;
    this.title = title;
    this.overview = overview;
    this.release_date = release_date;
    this.poster_path = poster_path;
    this.vote_average = vote_average;
  }
}
