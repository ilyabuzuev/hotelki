FROM node:22.18.0-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# RUN npm run quasar build

FROM nginx:alpine as production-stage
COPY --from=build-stage /app/dist/spa /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]  
