import adapter from '@sveltejs/adapter-auto';
import static_adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: static_adapter(),
		prerender: { default: true }
	}
};

export default config;
