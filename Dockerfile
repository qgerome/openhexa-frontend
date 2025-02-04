#
# ----------- Base -----------
FROM node:16-alpine as deps
WORKDIR /code
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

WORKDIR /code
# copy project file
COPY package.json package-lock.json  ./

RUN npm ci

## ----------- Builder -----------
FROM node:16-alpine AS builder
WORKDIR /code
COPY --from=deps /code/node_modules ./node_modules
COPY . .

ARG RELEASE
ARG SENTRY_AUTH_TOKEN

ENV SENTRY_RELEASE=${RELEASE}
ENV NEXT_PUBLIC_RELEASE=${RELEASE}
ENV CI=1

RUN npm run build

#
## ----------- Runner -----------
FROM node:16-alpine AS runner

WORKDIR /code
ARG APP=/code
ENV APP_USER=runner
RUN addgroup -S $APP_USER \
    && adduser -S $APP_USER -G $APP_USER \
    && mkdir -p ${APP}

COPY --from=builder --chown=${APP_USER}:${APP_USER} /code/public ./public
COPY --from=builder --chown=${APP_USER}:${APP_USER} /code/package.json ./package.json
COPY --from=builder --chown=${APP_USER}:${APP_USER} /code/next.config.js ./
COPY --from=builder --chown=${APP_USER}:${APP_USER} /code/next-i18next.config.js ./
COPY --from=builder --chown=${APP_USER}:${APP_USER} /code/.next ./.next
COPY --from=builder --chown=${APP_USER}:${APP_USER} /code/node_modules ./node_modules
COPY --from=builder --chown=${APP_USER}:${APP_USER} /code/server ./server

USER ${APP_USER}
EXPOSE 3000
ENV PORT 3000

CMD [ "npm", "start" ]
