import preprocess from 'svelte-preprocess'
import nodeAdapter from '@sveltejs/adapter-node'

/** @type {import('@sveltejs/kit').Config} */
export default {
  preprocess: [
    preprocess({
      defaults: {
        style: 'postcss'
      },
      postcss: true
    })
  ],

  kit: {
    adapter: nodeAdapter(),
    target: '#svelte'
  }
}
