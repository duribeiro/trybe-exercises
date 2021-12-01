FROM node:14-alpine AS build
RUN mkdir /app
COPY . ./app
COPY package*.json /app/
WORKDIR /app
RUN npm install
RUN npm run build

FROM nginx:1.16.0-alpine AS prod
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]