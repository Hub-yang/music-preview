import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  vue: true,
  formatters:true,
  unocss:true,
  ignores: ['node_modules', '**/node_modules/**', '.DS_Store', '**/.DS_Store/**', 'dist', '**/dist/**', 'dist-ssr', '**/dist-ssr/**', '*.local', '**/*.local/**', 'presets', '**/presets/**', '*.d.ts', '**/*.d.ts/**'],
})
