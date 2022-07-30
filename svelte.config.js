import adapter from '@sveltejs/adapter-auto';
import static_adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: static_adapter({
			paths: {
				base: '/McBoaty',
				assets: '/McBoaty'
			}
		}),
		prerender: { default: true }

	}
};

export default config;
