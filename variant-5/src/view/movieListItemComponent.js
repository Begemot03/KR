import { Component } from "../core/component.js";

function template(movie) {
    return  `<div class="card ${movie.status ? 'watched' : 'expanded'}">
                <div class="card-title">${movie.name}</div>
                <button class="card-delete">Удалить</button>
            </div>`;
}

export default class MovieListItemComponent extends Component {
    constructor({ container, movie, deleteCb }) {
        super({ container });
        this.movie = movie;
        this.deleteCb = deleteCb;
        this.render();
        this.onMount();
    }

    onMount() {
        this.element.querySelector(".card-delete").addEventListener("click", () => { this.deleteCb(); });
    }

    getTemplate() {
        return template(this.movie);
    }
}