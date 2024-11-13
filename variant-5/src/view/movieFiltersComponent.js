import { Component } from "../core/component.js";

function template() {
    return  `<div class="movie-filter">
                <h2>Фильтры</h2>

                <fieldset>
                    <legend>Статус:</legend>
                    <label><input type="radio" name="status-filter" value="all" checked /> Все</label>
                    <label><input type="radio" name="status-filter" value="watched" /> Просмотренные</label>
                    <label><input type="radio" name="status-filter" value="unwatched" /> Непросмотренные</label>
                </fieldset>

                <label><input type="checkbox" id="favorite-filter" /> Показывать только избранное</label>
            </div>`;
}

export default class MovieFiltersComponent extends Component {
    constructor({ container, addFilter }) {
        super({ container });
        this.render();
        this.addFilter = addFilter;
        this.onMount();

    }

    onMount() {
        this.element.querySelectorAll("input").forEach(filter => filter.addEventListener("change", (e) => {
            this.addFilter(e.target.checked);
        }))
    }

    getTemplate() {
        return template();
    }
}