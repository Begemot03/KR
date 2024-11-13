import AddMovieFormComponent from "./view/addMovieFormComponent.js";
import H1Component from "./view/h1Component.js";
import MovieFiltersComponent from "./view/movieFiltersComponent.js";
import MovieListPresenter from "./presenter/movieListPresenter.js";
import SiteDescriptionComponent from "./view/siteDescriptionComponent.js";

const app = document.querySelector(".container");

const h1 = new H1Component({ container: app });
const siteDesc = new SiteDescriptionComponent({ container: app });

const movieListPresenter = new MovieListPresenter({
    container: app,
});