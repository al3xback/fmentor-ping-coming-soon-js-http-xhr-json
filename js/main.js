import { sendHttpRequest } from './util.js';
import { renderSectionContent, handleError } from './render.js';
import { initForm } from './form.js';

const URL =
	'https://gist.githubusercontent.com/al3xback/05d62be6a31b44251c1d6c796ff2433b/raw/1884b2a9f8d37af2907789a18617d65ebf1d0fab/ping-coming-soon-data.json';

sendHttpRequest('GET', URL)
	.then((response) => {
		renderSectionContent(response);
		initForm();
	})
	.catch((err) => {
		handleError(err);
	});
