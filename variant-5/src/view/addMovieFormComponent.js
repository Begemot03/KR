import { Component } from "../core/component.js";

function template() {
    return  `<div class="movie-form">
                <h2>Добавить Фильм</h2>
                <form id="movie-form">
                    <label for="movie-title">Название фильма:</label>
                    <input type="text" id="movie-title" placeholder="Например, Начало" required />
                    
                    <div class="watched-toggle">
                        <label for="movie-status">Отметить как просмотренный:</label>
                        <label class="switch">
                            <input type="checkbox" id="movie-status">
                            <span class="slider"></span>
                        </label>
                    </div>

                    <button type="submit">Добавить Фильм</button>
                </form>
            </div>`;
}

export default class AddMovieFormComponent extends Component {
    constructor({ container, addItemCb }) {
        super({ container });
        this.addItemCb = addItemCb;
        this.render();
        this.onMount();
    }

    onMount() {
        this.element.querySelector("#movie-form").addEventListener("submit", (e)=> {
            e.preventDefault();
            this.addItemCb(e)
        });
    }

    getTemplate() {
        return template();
    }
}