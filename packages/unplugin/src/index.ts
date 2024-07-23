import { createUnplugin } from 'unplugin'
import VitePluginInspector from '@djie/vite-plugin-vue-inspector'
import type { Options } from './types'

export default createUnplugin<Options, true>((options) => {
  const plugins = VitePluginInspector(options) as any
  return [
    {
      name: '@djie/unplugin-vue-inspector',
      vite: plugins[0],
    },
    {
      name: '@djie/unplugin-vue-inspector:post',
      vite: plugins[1],
    },
  ]
})
