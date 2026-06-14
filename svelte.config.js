import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		// Adapter estático para deploy en hosting compartido (Ferozo, FTP).
		// Genera HTML/CSS/JS puro en la carpeta build/.
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		paths: {
			// Base path para GitHub Pages (repo project). En Ferozo/raíz queda vacío.
			base: process.env.BASE_PATH ?? ''
		},
		prerender: {
			// Los links del Navbar (#inicio, #segmentos, etc.) son anclas relativas
			// pensadas para la home. En subpáginas no existen esos ids: se ignora.
			handleMissingId: 'warn',
			// /blog/[slug] no genera entradas mientras blogPosts esté vacío: se ignora.
			handleUnseenRoutes: 'warn',
			// /nosotros/ y otras rutas referenciadas aún no creadas: warn en vez de fail.
			handleHttpError: 'warn'
		}
	}
};

export default config;
