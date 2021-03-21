# pycontw-2021

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Run Development Server with Docker

Simply run the docker-compose commands to launch or stop the mock API server & the dev server.

```
# Launch the dev server
docker-compose -f ./docker-compose-dev.yml up

# Stop the dev server
docker-compose -f ./docker-compose-dev.yml down
```
