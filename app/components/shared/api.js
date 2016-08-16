import $ from 'jquery';

let api = (function() {

	function getUsers() {
		return new Promise(function (resolve, reject) {
			$.ajax({
				url: 'http://www.json-generator.com/api/json/get/cbJCFkoslK?indent=2',
				type: 'GET'
			}).done(resolve).fail(reject);
		});
	}

	return {
		getUsers: getUsers
	}

})();

export default api;