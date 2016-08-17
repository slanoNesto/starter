import jQuery from 'jquery'
import Brkovi from 'Mustache'
import api from '../shared/api'
import style from './card.styl'

let card = (function($, Brkovi, api) {

	let template, $el;

	function init() {
		cacheDom();

		api.getUsers().then(users => render(users));
	}

	function cacheDom() {
		$el = $('#users');
		template = $('#users-template').html();
	}

	function render(users) {
		$el.html(Brkovi.render(template, {users: users}));
	}

	init();

	return {
		render: render
	}

})(jQuery, Brkovi, api);

export default card;