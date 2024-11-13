import { uuid } from "../utils/uuid.js";

export default class MovieModel {
    #observables = [];
    #movies = [
        { id: uuid(), name: "Титаник", status: true },
        { id: uuid(), name: "Воронины", status: false },
    ];

    getMovies(filter) {
        if(filter == "any") return this.#movies;
        return this.#movies.filter(movie => movie.status == filter);
    }

    addMovie(movie) {
        this.#movies.push({
            id: uuid(),
            ...movie
        });

        this.#notify();
    }

    removeMovie(movieId) {
        this.#movies = this.#movies.filter(movie => movie.id != movieId);

        this.#notify();
    }

    supscribe(cb) {
        this.#observables.push(cb);
    }

    #notify() {
        this.#observables.forEach(cb => cb());
    }
}