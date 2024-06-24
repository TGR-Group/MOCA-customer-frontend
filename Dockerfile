# Frontend builder
FROM node:latest AS build
# Copy files
COPY ./ ./
# Change work directory
WORKDIR /app
# Build
RUN npm install && npm run build
# Web Server
FROM nginx:latest
# Change work directory
WORKDIR /usr/share/nginx/html
# Copy files
COPY --from=build /app/dist ./
