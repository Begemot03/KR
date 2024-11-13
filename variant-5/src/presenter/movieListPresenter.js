import MovieModel from "../model/moviesModel.js";
import MovieListComponent from "../view/movieListComponent.js";
import MovieListItemComponent from "../view/movieListItemComponent.js";
import AddMovieFormComponent from "../view/addMovieFormComponent.js";
import MovieFiltersComponent from "../view/movieFiltersComponent.js";

export default class MovieListPresenter {
    #container = null;
    #movieList = null;

    #movieModel = new MovieModel();
    #filters = "any";

    constructor({ container }) {
        this.#container = container;
        this.#renderAddNewMovie();
        this.#renderFilters();
        this.#renderMovieList();
        this.#movieModel.supscribe(() => this.render());
        this.render();
    }

    render() {
        this.#clearMovieList();
        this.#renderMovieItems()
    }

    addMovieHander(e) {
        const form = e.currentTarget;

        const movie = {
            name: form.querySelector("#movie-title").value.trim(),
            status: form.querySelector("#movie-status").checked
        }

        if(movie.name == "") return;
        form.querySelector("#movie-title").value = "";
        this.#movieModel.addMovie(movie);
    }

    #addFilter(f) {
        console.log(f);
    }

    #renderMovieList() {
        this.#movieList = new MovieListComponent({ container: this.#container, rootSelector: ".card-container" });
    }

    #renderMovieItems() {
        this.#movieModel.getMovies(this.#filters).forEach(movie => {
            this.#renderMovieItem(movie);
        });
    }

    #renderMovieItem(movie) {
        new MovieListItemComponent({
            container: this.#movieList.getRoot(),
            deleteCb: () => {
                this.#movieModel.removeMovie(movie.id)
            },
            movie,
        });
    }

    #renderFilters() {
        new MovieFiltersComponent({
            container: this.#container,
            addFilter: (f) => this.#addFilter(f)
        });
    }

    #renderAddNewMovie() {
        new AddMovieFormComponent({ container: this.#container, addItemCb: (e) => this.addMovieHander(e) });
    }

    #clearMovieList() {
        this.#movieList.getRoot().innerHTML = "";
    }
}