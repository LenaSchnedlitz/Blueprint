# Blueprint

## Quick Start

```shell
npx degit LenaSchnedlitz/blueprint my-project
cd my-project
npm install
npm run dev
```

For static code analysis, also run (in another tab)

```shell
npm run analyse:watch
```

:bicyclist:

---

## Customization

Adapt the following files:

- [ ] `package.json` - lines 2-4
- [ ] `public/manifest.json` - lines 2-4
- [ ] `public/index.html` - see TODOs
- [ ] `/public` pics - _Don't forget to optimize!_
- [ ] `src/App.svelte` - see TODOs

## Development

**Notes:**

- Start developing in `src/AppContent.svelte`.
- **Check code** (manual + GitLab pipeline):
  _ `npm run analyse`
  _ `npm run eslint`
- **Format:** Files are prettified automatically (via pre-commit hook).

### Deployment

- [ ] Set up GitHub repo
- [ ] Uncomment lines in `.gitlab-ci.yml` - _see TODO_
- [ ] Add variables to CI/CD config on GitLab: - [ ] `DEPLOY_REPO` - [ ] `DEPLOY_TOKEN` - _masked!_
