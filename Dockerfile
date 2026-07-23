FROM node:24-alpine AS build

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .

RUN NODE_OPTIONS=--max-old-space-size=2560 pnpm build


FROM node:24-alpine AS runtime

WORKDIR /app

ENV NODE_ENV=production \
    HOST=0.0.0.0 \
    PORT=3000

COPY --from=build --chown=node:node /app/.output ./.output
COPY --from=build --chown=node:node /app/.env ./.env

USER node

EXPOSE 3000

CMD ["node", "--env-file=.env", ".output/server/index.mjs"]
