import { Component } from "../core/component.js";

function template() {
    return  `<section>
                <p>Используйте эту коллекцию для отслеживания фильмов, которые вы посмотрели или хотите посмотреть. Отмечайте фильмы как просмотренные и фильтруйте по статусу.</p>
            </section>`;
}

export default class SiteDescriptionComponent extends Component {
    constructor({ container }) {
        super({ container });
        this.render();
    }

    getTemplate() {
        return template();
    }
}