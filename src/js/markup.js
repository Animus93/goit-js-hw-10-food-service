import layout from '../partials/layout.hbs';
import menu from '../partials/menu.json'

const Handlebars = require("handlebars");

const tags = {
    menuRef: document.querySelector('.js-menu'),
};

const markup = layout(menu);
tags.menuRef.insertAdjacentHTML('beforeend',markup)
