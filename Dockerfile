FROM node:21-alpine as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:21-alpine as serve
WORKDIR /app
COPY --from=build /app/dist ./dist
EXPOSE 4000
CMD [ "node", "dist/test-ssr/server/server.mjs" ]