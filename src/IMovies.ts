export interface IMovies {
  id: number;
  genre_ids: Array<number>;
  title: string;
  overview: string;
  release_date: Date;
  poster_path: string;
  vote_average: number;
}
