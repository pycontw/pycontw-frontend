FROM node:12.20.2-buster-slim

WORKDIR /app

COPY package.json package-lock.json tailwind.config.js ./
RUN npm install
