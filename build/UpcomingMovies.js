export class UpcomingMovies {
    constructor(id, genre_ids, title, overview, release_date, poster_path, vote_average) {
        this.id = id;
        this.genre_ids = genre_ids;
        this.title = title;
        this.overview = overview;
        this.release_date = release_date;
        this.poster_path = poster_path;
        this.vote_average = vote_average;
    }
}
