import jQuery from 'jquery'
import Brkovi from 'Mustache'
import api from '../shared/api'

let card = (function($, Brkovi, api) {

	let templateEl, $el;

	function init() {
		cacheDom();
		
		api.getUsers().then(users => render(users));
	}

	function cacheDom() {
		$el = $('#target');
		templateEl = $('#template');
	}

	function render(users) {
		var template = templateEl.html();
		Brkovi.parse(template);
		var rendered = Brkovi.render(template, {users: users});
		$el.html(rendered);
	}

	init();

	return {
		render: render
	}

})(jQuery, Brkovi, api);

export default card;