import { defineConfig, ViteUserConfig } from 'vitest/config';

const reporters: Exclude<ViteUserConfig['test'], undefined>['reporters'] = ['default', 'html'];

if (process.env.GITHUB_ACTIONS) {
  reporters.push('github-actions');
}

export default defineConfig({
  test: {
    typecheck: {
      enabled: true,
      tsconfig: 'tsconfig.json',
      ignoreSourceErrors: true,
    },

    reporters,
    include: ['tests/**/*.spec.ts'],
    coverage: {
      enabled: true,
      reporter: ['text', 'html', 'json', 'json-summary'],
      include: ['src/**/*.ts'],
      exclude: ['**/node_modules/**', '**/vendor/**'],
      reportOnFailure: true,
    },
  },
});
