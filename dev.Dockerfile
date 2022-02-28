FROM node:12.20.2

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install
