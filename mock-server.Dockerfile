FROM node:14.21.3-buster-slim

WORKDIR /usr/local

RUN npm install -g json-server@0.16.3

COPY db.json routes.json json-server-middlewares.js ./

CMD ["json-server", "--watch", "db.json", "--routes", "routes.json", "--host", "0.0.0.0", "--port", "9876", "--no-cors", "--middlewares", "json-server-middlewares.js"]
