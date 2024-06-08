FROM node:14.21.3

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps
