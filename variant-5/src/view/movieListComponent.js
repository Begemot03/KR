import { Component } from "../core/component.js";

function template() {
    return  `<div class="movie-list">
                <h2>Список Фильмов</h2>
                <div id="movie-list" class="card-container">
                
                </div>
            </div>`;
}

export default class MovieListComponent extends Component {
    constructor({ container, rootSelector }) {
        super({ container, rootSelector });
        this.render();
    }

    getTemplate() {
        return template();
    }
}