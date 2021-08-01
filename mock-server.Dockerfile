FROM node:12.20.2-buster-slim

WORKDIR /usr/local

RUN npm install -g json-server

COPY db.json routes.json ./

CMD ["json-server", "--watch", "db.json", "--routes", "routes.json", "--host", "0.0.0.0", "--port", "9876", "--middlewares", "json-server-middlewares.js"]
