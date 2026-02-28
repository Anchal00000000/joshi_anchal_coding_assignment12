FROM node:20-alpine AS build
WORKDIR /joshi_anchal_ui_garden
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /joshi_anchal_ui_garden/build /usr/share/nginx/html
EXPOSE 8083
CMD ["nginx", "-g", "daemon off;"]