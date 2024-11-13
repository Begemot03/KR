import { Component } from "../core/component.js";

function template() {
    return  `<h1>Коллекция Фильмов</h1>`;
}

export default class H1Component extends Component {
    constructor({ container }) {
        super({ container });
        this.render();
    }

    getTemplate() {
        return template();
    }
}