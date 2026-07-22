![pycontw-frontend ci](https://github.com/pycontw/pycontw-frontend/actions/workflows/ci.yml/badge.svg)
![pycontw-frontend cd](https://github.com/pycontw/pycontw-frontend/actions/workflows/cd.yml/badge.svg)
![nuxt](https://img.shields.io/badge/Framework-Nuxt.js-04C58E.svg)

# pycontw-frontend

Frontend of PyCon TW official website.

## Development

### Requirements

- node `v22` or later (recommended using LTS)
- pnpm `v11` or later

Please create a `.env` file from `.env.example` and fill in the required environment variables.

## Develop on your local machine

```bash
# install dependencies
pnpm i
```

```bash
# option 1: start development server
pnpm dev

# option 2: start development server with mock data
pnpm dev:mock
```

## Develop with Docker

```bash
# default with mock data
docker compose -f docker-compose.dev.yml up --build

# stop the container
docker compose -f docker-compose.dev.yml down
```

## Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```

## Test

```bash
pnpm run lint
```
