# Build stage
FROM node:20-alpine AS build

WORKDIR /joshi_anchal_ui_garden_build_checks

COPY package*.json ./
RUN npm ci --legacy-peer-deps

COPY . .
RUN npm run build-storybook

# Production stage
FROM nginx:alpine

COPY --from=build /joshi_anchal_ui_garden_build_checks/storybook-static /usr/share/nginx/html

EXPOSE 8018

COPY nginx.conf /etc/nginx/conf.d/default.conf