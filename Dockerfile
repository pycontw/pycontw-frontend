FROM node:14.21.3-buster-slim

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
COPY configs ./configs
COPY plugins ./plugins
COPY static ./static
COPY store ./store
COPY utils ./utils
COPY nuxt.config.js tailwind.config.js .babelrc .env ./

ENV ROUTER_BASE /2024/
ENV BASE_URL http://pycontw-2024:8000
ENV BUILD_TARGET server
ENV HOST 0.0.0.0
ENV API_URL_BROWSER https://staging.pycon.tw/prs

RUN npm run build

CMD ["npm", "start"]
