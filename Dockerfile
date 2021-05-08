FROM node:12.20.2-buster-slim

WORKDIR /usr/local

COPY package-lock.json package-lock.json
COPY package.json package.json

RUN npm ci

COPY assets ./assets
COPY components ./components
COPY i18n ./i18n
COPY layouts ./layouts
COPY middleware ./middleware
COPY pages ./pages
COPY plugins ./plugins
COPY static ./static
COPY store ./store
COPY utils ./utils
COPY nuxt.config.js .babelrc ./

ENV ROUTER_BASE /2021/
ENV BASE_URL pycontw-2021:8000
ENV BUILD_TARGET server
ENV HOST 0.0.0.0
ENV API_URL_BROWSER https://tw.pycon.org/prs

RUN npm run build

CMD ["npm", "start"]
