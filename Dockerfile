# Frontend builder
FROM node:latest AS build
# Copy files
COPY ./ ./
# Change work directory
WORKDIR /app
# Build
RUN npm install && npm run build
# Copy image to dists
RUN cp -rf ./src/assets/img/* ./dist/assets/img/
# Web Server
FROM nginx:latest
# Change work directory
WORKDIR /usr/share/nginx/html
# Copy files
COPY --from=build /app/dist ./
