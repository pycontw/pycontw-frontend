FROM node:12.20.2-buster-slim

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install
